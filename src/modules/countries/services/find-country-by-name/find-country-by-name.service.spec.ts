import { Test, TestingModule } from '@nestjs/testing';
import { FindCountryByNameService } from './find-country-by-name.service';

describe('FindCountryByNameService Test', () => {
  let service: FindCountryByNameService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindCountryByNameService],
    }).compile();

    service = module.get<FindCountryByNameService>(FindCountryByNameService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
