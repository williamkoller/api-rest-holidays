import { ConflictException, Injectable } from '@nestjs/common';
import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { CountriesRepository } from '@/modules/countries/repositories/countries.repository';
import { Country } from '@/modules/countries/entities/country.entity';

@Injectable()
export class AddCountryService {
  constructor(private readonly countriesRepo: CountriesRepository) {}
  async addCountry(addCountryDto: AddCountryDto): Promise<Country> {
    const countryFound = await this.countriesRepo.findByName(
      addCountryDto.name,
    );

    if (countryFound) {
      throw new ConflictException('there is already a country with that name.');
    }

    return await this.countriesRepo.addCountry(addCountryDto);
  }
}
