import { ConflictException, Injectable } from '@nestjs/common';
import { AddCountryDto } from '../../dtos/add-country/add-country.dto';
import { CountriesRepository } from '../../repositories/countries.repository';

@Injectable()
export class AddCountryService {
  constructor(private readonly countriesRepo: CountriesRepository) {}
  async addCountry(addCountryDto: AddCountryDto) {
    const countryFound = await this.countriesRepo.findByName(
      addCountryDto.name,
    );

    if (countryFound) {
      throw new ConflictException('there is already a country with that name.');
    }

    return await this.countriesRepo.addCountry(addCountryDto);
  }
}
