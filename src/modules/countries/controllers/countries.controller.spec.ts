import { Test, TestingModule } from '@nestjs/testing';
import { AddCountryService } from '../services/add-country/add-country.service';
import { CountriesController } from './countries.controller';

describe('CountriesController', () => {
  let controller: CountriesController;
  beforeEach(async () => {
    const mockService = {
      addCountry: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [
        {
          provide: AddCountryService,
          useFactory: () => mockService,
        },
      ],
    }).compile();
    controller = module.get<CountriesController>(CountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
