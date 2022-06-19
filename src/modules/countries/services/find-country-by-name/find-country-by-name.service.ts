import { Injectable } from '@nestjs/common';
import { Country } from '../../entities/country.entity';
import { CountriesRepository } from '../../repositories/countries.repository';

@Injectable()
export class FindCountryByNameService {
  constructor(private readonly countriesRepo: CountriesRepository) {}

  async findByName(name: string): Promise<unknown> {
    return name;
  }
}
