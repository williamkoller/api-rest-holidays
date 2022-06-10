import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from '../../repositories/countries.repository';
import { FindAllCountriesService } from './find-all-contries.service';

describe('FindAllCountriesService', () => {
  let service: FindAllCountriesService;
  let countriesRepo: CountriesRepository;

  beforeEach(async () => {
    const countriesRepositoryMock = {
      findAllCountry: jest.fn().mockResolvedValue([]),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllCountriesService,
        {
          provide: CountriesRepository,
          useFactory: () => countriesRepositoryMock,
        },
      ],
    }).compile();

    service = module.get<FindAllCountriesService>(FindAllCountriesService);
    countriesRepo = module.get<CountriesRepository>(CountriesRepository);
  });
  it('should be service defined', () => {
    expect(service).toBeDefined();
  });

  it('should be repository defined', () => {
    expect(countriesRepo).toBeDefined();
  });

  describe('findAll()', () => {
    it('should be throw findAllCountries throw', async () => {
      (countriesRepo.findAllCountry as jest.Mock).mockRejectedValue(
        new NotFoundException('No record found.'),
      );
      await expect(service.findAll).rejects.toThrow();
    });
    it('should be no throw if repository returns', async () => {
      countriesRepo.findAllCountry = jest.fn().mockReturnValue([]);
      await expect(service.findAll()).resolves.not.toThrow();
    });
  });
});
