import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../../entities/country.entity';
import { CountriesRepository } from '../../repositories/countries.repository';

@Injectable()
export class FindCountryByNameService {
  constructor(private readonly countriesRepo: CountriesRepository) {}

  async findByName(name: string): Promise<Country> {
    const country = await this.countriesRepo.findByName(name);

    if (!country) {
      throw new NotFoundException('country not found.');
    }

    return country;
  }
}
