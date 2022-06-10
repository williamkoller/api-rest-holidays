import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './controllers/countries.controller';
import { Country } from '@/modules/countries/entities/country.entity';
import { CountriesRepository } from './repositories/countries.repository';
import { AddCountryService } from './services/add-country/add-country.service';
import { FindAllCountriesService } from './services/find-all-countries/find-all-contries.service';

export const imports = [TypeOrmModule.forFeature([Country])];
export const providers = [
  AddCountryService,
  CountriesRepository,
  FindAllCountriesService,
];
export const controllers = [CountriesController];
export const exportings = [AddCountryService];
