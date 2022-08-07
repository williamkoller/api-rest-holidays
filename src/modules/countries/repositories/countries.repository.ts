import { MongoRepository } from 'typeorm';
import { Country } from '@/modules/countries/entities/country.entity';
import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AddCountryRepository,
  FindAllCountriesRepository,
  FindCountryByNameRepository,
  FindCountriesAndCountRepository,
} from '@/data/protocols/db/countries';

@Injectable()
export class CountriesRepository
  implements
    AddCountryRepository,
    FindAllCountriesRepository,
    FindCountryByNameRepository,
    FindCountriesAndCountRepository
{
  constructor(
    @InjectRepository(Country)
    private readonly mongoRepo: MongoRepository<Country>,
  ) {}
  async addCountry(addCountryDto: AddCountryDto): Promise<Country> {
    const newCountry = Object.assign({} as AddCountryDto, addCountryDto);
    return await this.mongoRepo.save(newCountry);
  }

  async findAllCountry(): Promise<Country[]> {
    return await this.mongoRepo.find();
  }

  async findByName(name: string): Promise<Country> {
    return await this.mongoRepo.findOneBy({ name: { $eq: name } });
  }

  async findCountriesAndCount(): Promise<number> {
    return await this.mongoRepo.count();
  }
}
