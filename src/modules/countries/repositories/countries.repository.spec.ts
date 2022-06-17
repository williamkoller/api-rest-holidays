import { Test, TestingModule } from '@nestjs/testing';
import { Country } from '@/modules/countries/entities/country.entity';
import { CountriesRepository } from './countries.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

describe('CountriesRepository', () => {
  let mongoRepo: MongoRepository<Country>;
  let countriesRepo: CountriesRepository;
  let mockAddCountry: Country;

  beforeEach(async () => {
    mockAddCountry = {
      _id: 'any_id',
      name: 'any_name',
      slug: 'any_slug',
      createdAt: new Date('2022-06-08'),
      updatedAt: new Date('2022-06-08'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CountriesRepository,
        {
          provide: getRepositoryToken(Country),
          useValue: {
            find: jest.fn(),
            findOne: jest.fn().mockReturnValue(mockAddCountry.name),
            save: jest.fn(),
            count: jest.fn(),
            addCountry: jest.fn().mockResolvedValue(mockAddCountry),
            findAllCountry: jest.fn().mockResolvedValue([mockAddCountry]),
            findOneBy: jest.fn().mockResolvedValue(mockAddCountry.name),
            findByName: jest.fn(),
            findCountriesAndCount: jest.fn(),
          },
        },
      ],
    }).compile();

    mongoRepo = module.get<MongoRepository<Country>>(
      getRepositoryToken(Country),
    );
    countriesRepo = module.get<CountriesRepository>(CountriesRepository);
  });
  it('should be defined', () => {
    expect(mongoRepo).toBeDefined();
  });

  describe('addCountry()', () => {
    it('should be called save with correct params', async () => {
      mongoRepo.save = jest.fn().mockReturnValue(mockAddCountry);
      await countriesRepo.addCountry(mockAddCountry);
      expect(mongoRepo.save).toBeCalledWith(mockAddCountry);
    });

    it('should be returns created data', async () => {
      mongoRepo.save = jest.fn().mockReturnValue(mockAddCountry);
      expect(await mongoRepo.save(mockAddCountry)).toEqual(mockAddCountry);
    });
  });

  describe('findAllCountry()', () => {
    it('should be findAll with correct params', async () => {
      await countriesRepo.findAllCountry();
      expect(mongoRepo.find).toBeCalledWith();
    });
  });

  describe('findByName()', () => {
    it('should be called findOne with correct params', async () => {
      await countriesRepo.findByName(mockAddCountry.name);
      expect(mongoRepo.findOne).toBeCalledTimes(0);
    });
  });

  describe('findCountriesAndCount()', () => {
    it('should be called count and return correct params', async () => {
      await countriesRepo.findCountriesAndCount();
      expect(mongoRepo.count).toHaveLength(0);
    });
  });
});
