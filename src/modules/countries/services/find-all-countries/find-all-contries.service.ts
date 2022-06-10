import { Injectable, NotFoundException } from '@nestjs/common';
import { Country } from '../../entities/country.entity';
import { CountriesRepository } from '../../repositories/countries.repository';

@Injectable()
export class FindAllCountriesService {
  constructor(private readonly countriesRepo: CountriesRepository) {}
  async findAll(): Promise<Country[]> {
    const countries = await this.countriesRepo.findAllCountry();

    if (!countries) {
      throw new NotFoundException('No record found.');
    }

    return countries;
  }
}
