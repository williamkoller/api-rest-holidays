import { TypeOrmModule } from '@nestjs/typeorm';
import { CountriesController } from './controllers/countries.controller';
import { Country } from '@/modules/countries/entities/country.entity';
import { CountriesRepository } from './repositories/countries.repository';
import { AddCountryService } from './services/add-country/add-country.service';

export const imports = [TypeOrmModule.forFeature([Country])];
export const providers = [AddCountryService, CountriesRepository];
export const controllers = [CountriesController];
export const exportings = [AddCountryService];
