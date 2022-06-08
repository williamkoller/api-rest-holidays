import { Test, TestingModule } from '@nestjs/testing';
import { Country } from '../models/country.model';
import { CountriesRepository } from './countries.repository';

describe('CountriesRepository', () => {
  let repository: CountriesRepository;
  let mockAddCountry: Country;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesRepository],
    }).compile();

    repository = module.get<CountriesRepository>(CountriesRepository);

    mockAddCountry = {
      _id: 'any_id',
      name: 'any_name',
      slug: 'any_slug',
      createdAt: new Date('2022-06-08'),
      updatedAt: new Date('2022-06-08'),
    };

    repository.save = jest.fn();
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('addCountry()', () => {
    it('should be called save with correct params', async () => {
      repository.save = jest.fn().mockReturnValue(mockAddCountry);
      await repository.addCountry(mockAddCountry);
      expect(repository.save).toBeCalledWith(mockAddCountry);
    });

    it('should be returns created data', async () => {
      repository.save = jest.fn().mockReturnValue(mockAddCountry);
      expect(await repository.addCountry(mockAddCountry)).toEqual(
        mockAddCountry,
      );
    });
  });
});
