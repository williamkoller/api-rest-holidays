import { Injectable } from '@nestjs/common';
import { Country } from '@/modules/countries/entities/country.entity';
import { CountriesRepository } from '@/modules/countries/repositories/countries.repository';

@Injectable()
export class FindAllCountriesService {
  constructor(private readonly countriesRepo: CountriesRepository) {}
  async findAll(): Promise<Country[]> {
    return await this.countriesRepo.findAllCountry();
  }
}
