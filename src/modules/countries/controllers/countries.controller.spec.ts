import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Country } from '../models/country.model';
import { AddCountryService } from '../services/add-country/add-country.service';
import { CountriesController } from './countries.controller';

describe('CountriesController', () => {
  let controller: CountriesController;
  let service: AddCountryService;
  let mockAddCountry: Country;

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
    service = module.get<AddCountryService>(AddCountryService);

    mockAddCountry = {
      _id: 'any_id',
      name: 'any_name',
      slug: 'any_slug',
      createdAt: new Date('2022-06-08'),
      updatedAt: new Date('2022-06-08'),
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be throw when service throw', async () => {
    (service.addCountry as jest.Mock).mockRejectedValue(
      new ConflictException('there is already a country with that name.'),
    );
    await expect(controller.add(mockAddCountry)).rejects.toThrow(
      new ConflictException('there is already a country with that name.'),
    );
  });
});
