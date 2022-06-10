import { MongoRepository } from 'typeorm';
import { Country } from '@/modules/countries/entities/country.entity';
import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CountriesRepository {
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
    return await this.mongoRepo.findOneBy({ name });
  }
}
