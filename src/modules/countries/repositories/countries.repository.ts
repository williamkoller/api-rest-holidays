import { EntityRepository, Repository } from 'typeorm';
import { Country } from '@/modules/countries/models/country.model';
import { AddCountryDto } from '../dtos/add-country/add-country.dto';

EntityRepository(Country);
export class CountriesRepository extends Repository<Country> {
  async addCountry(addCountryDto: AddCountryDto): Promise<Country> {
    const newCountry = Object.assign({} as AddCountryDto, addCountryDto);
    return await this.save(newCountry);
  }

  async findAllCountry(): Promise<Country[]> {
    return await this.find();
  }

  async findByName(name: string): Promise<Country> {
    return await this.findOne(name);
  }
}
