import { Country } from '@/modules/countries/entities/country.entity';

export interface FindAllCountriesRepository {
  findAllCountry(): Promise<Country[]>;
}
