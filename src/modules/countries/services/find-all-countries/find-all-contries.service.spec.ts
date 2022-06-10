import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from '../../repositories/countries.repository';
import { FindAllCountriesService } from './find-all-contries.service';

describe('FindAllCountriesService', () => {
  let service: FindAllCountriesService;
  let mongoRepo: CountriesRepository;
  beforeEach(async () => {
    const countriesRepositoryMock = {
      findAllCountry: jest.fn(),
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
    mongoRepo = module.get<CountriesRepository>(CountriesRepository);
  });
  it('should be service defined', () => {
    expect(service).toBeDefined();
  });

  it('should be repository defined', () => {
    expect(mongoRepo).toBeDefined();
  });

  describe('findAll()', () => {
    it('should be no throw if repository returns', async () => {
      await expect(service.findAll()).resolves.not.toThrow();
    });

    it('should be called repository with correct params', async () => {
      await service.findAll();
      expect(mongoRepo.findAllCountry).toBeCalledTimes(1);
    });
  });
});
