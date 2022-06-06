import { EntityRepository, Repository } from 'typeorm';
import { Country } from '@/modules/countries/models/country.model';

EntityRepository(Country);
export class CountriesRepository extends Repository<Country> {}
