import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from '@/modules/countries/repositories/countries.repository';
import { AddCountryService } from './add-country.service';

describe('AddCountryService', () => {
  let repository: CountriesRepository;
  let service: AddCountryService;
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
  });
  it('should be service defined', () => {
    expect(service).toBeDefined();
  });

  it('should be repository defined', () => {
    expect(repository).toBeDefined();
  });
});
