import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { Country } from '@/modules/countries/entities/country.entity';
import { AddCountryService } from '@/modules/countries/services/add-country/add-country.service';
import { FindAllCountriesService } from '../services/find-all-countries/find-all-contries.service';

@Controller('countries')
export class CountriesController {
  constructor(
    private readonly addCountryService: AddCountryService,
    private readonly findAllCountriesService: FindAllCountriesService,
  ) {}

  @Post()
  async add(@Body() addCountryDto: AddCountryDto): Promise<Country> {
    return await this.addCountryService.addCountry(addCountryDto);
  }

  // @Get()
  // async find(): Promise<Country[]> {
  //   return await this.findAllCountriesService.findAll();
  // }
}
