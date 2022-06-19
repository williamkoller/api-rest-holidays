import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Country } from '../../entities/country.entity';
import { CountriesRepository } from '../../repositories/countries.repository';
import { FindCountryByNameService } from './find-country-by-name.service';

describe('FindCountryByNameService Test', () => {
  let service: FindCountryByNameService;
  let repository: CountriesRepository;
  let mockAddCountry: Country;

  beforeEach(async () => {
    const countriesRepositoryMock = {
      findByName: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindCountryByNameService,
        {
          provide: CountriesRepository,
          useFactory: () => countriesRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<FindCountryByNameService>(FindCountryByNameService);
    repository = module.get<CountriesRepository>(CountriesRepository);
    mockAddCountry = {
      _id: 'any_id',
      name: 'any_name',
      slug: 'any_slug',
      createdAt: new Date('2022-06-08'),
      updatedAt: new Date('2022-06-08'),
    };
  });
  it('should be service defined', () => {
    expect(service).toBeDefined();
  });
  it('should be repository defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findByName()', () => {
    it('should be no throw if repository returns', async () => {
      await expect(service.findByName('any_name')).rejects.toThrow();
    });
    it('should be throw findAllCountries throw', async () => {
      (repository.findByName as jest.Mock).mockRejectedValue(
        new NotFoundException('No record found.'),
      );
      await expect(service.findByName).rejects.toThrow();
    });
  });
});
