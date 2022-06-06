import { Test, TestingModule } from '@nestjs/testing';
import { CountriesRepository } from './countries.repository';

describe('CountriesRepository', () => {
  let repository: CountriesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesRepository],
    }).compile();

    repository = module.get<CountriesRepository>(CountriesRepository);
  });
  it('should be defined', () => {
    expect(repository).toBeDefined();
  });
});
