import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './models/country.model';
import { CountriesRepository } from './repositories/countries.repository';

export const imports = [
  TypeOrmModule.forFeature([Country, CountriesRepository]),
];
export const providers = [];
export const controllers = [];
