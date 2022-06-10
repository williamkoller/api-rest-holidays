import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Country } from '@/modules/countries/entities/country.entity';
import { AddCountryService } from '../services/add-country/add-country.service';
import { CountriesController } from './countries.controller';
import { FindAllCountriesService } from '../services/find-all-countries/find-all-contries.service';

describe('CountriesController', () => {
  let controller: CountriesController;
  let service: AddCountryService;
  let findAllService: FindAllCountriesService;
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
        {
          provide: FindAllCountriesService,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get<CountriesController>(CountriesController);
    service = module.get<AddCountryService>(AddCountryService);
    findAllService = module.get<FindAllCountriesService>(
      FindAllCountriesService,
    );

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

  describe('add()', () => {
    it('should be throw when service throw', async () => {
      (service.addCountry as jest.Mock).mockRejectedValue(
        new ConflictException('there is already a country with that name.'),
      );
      await expect(controller.add(mockAddCountry)).rejects.toThrow(
        new ConflictException('there is already a country with that name.'),
      );
    });

    it('should be returns when service returns', async () => {
      (service.addCountry as jest.Mock).mockReturnValue(mockAddCountry);
      expect(await controller.add(mockAddCountry)).toEqual(mockAddCountry);
    });
  });

  // describe('findAll()', () => {
  //   it('should be returns when service returns', async () => {
  //     (findAllService.findAll as jest.Mock).mockReturnValue(mockAddCountry);
  //     expect(await controller.find()).toEqual(mockAddCountry);
  //   });
  // });
});
