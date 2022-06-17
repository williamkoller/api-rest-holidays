import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { Country } from '@/modules/countries/entities/country.entity';

export interface AddCountryRepository {
  addCountry(addCountryDto: AddCountryDto): Promise<Country>;
}
