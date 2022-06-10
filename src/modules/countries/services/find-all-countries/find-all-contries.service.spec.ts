import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from '../../repositories/countries.repository';
import { FindAllCountriesService } from './find-all-contries.service';

describe('FindAllCountriesService', () => {
  let service: FindAllCountriesService;
  let mongoRepo: CountriesRepository;
  beforeEach(async () => {
    const countriesRepositoryMock = {
      findAll: jest.fn(),
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
});
