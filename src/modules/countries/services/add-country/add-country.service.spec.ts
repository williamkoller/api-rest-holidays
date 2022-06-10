import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from '@/modules/countries/repositories/countries.repository';
import { AddCountryService } from './add-country.service';
import { Country } from '../../models/country.model';
import { InternalServerErrorException } from '@nestjs/common';

describe('AddCountryService', () => {
  let repository: CountriesRepository;
  let service: AddCountryService;
  let mockAddCountry: Country;

  beforeEach(async () => {
    const countriesRepositoryMock = {
      addCountry: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddCountryService,
        {
          provide: CountriesRepository,
          useFactory: () => countriesRepositoryMock,
        },
      ],
    }).compile();
    service = module.get<AddCountryService>(AddCountryService);
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

  describe('addCountry()', () => {
    it('should be throw if repository throw', async () => {
      await expect(service.addCountry()).rejects.toThrow(
        new InternalServerErrorException(),
      );
    });
  });
});
