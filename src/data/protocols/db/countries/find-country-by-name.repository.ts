import { Country } from '@/modules/countries/entities/country.entity';

export interface FindCountryByNameRepository {
  findByName(name: string): Promise<Country>;
}
