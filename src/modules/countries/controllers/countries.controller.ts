import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AddCountryDto } from '@/modules/countries/dtos/add-country/add-country.dto';
import { Country } from '@/modules/countries/entities/country.entity';
import { AddCountryService } from '@/modules/countries/services/add-country/add-country.service';
import { FindAllCountriesService } from '../services/find-all-countries/find-all-contries.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindCountryByNameService } from '../services/find-country-by-name/find-country-by-name.service';

@ApiTags('countries')
@Controller('countries')
export class CountriesController {
  constructor(
    private readonly addCountryService: AddCountryService,
    private readonly findAllCountriesService: FindAllCountriesService,
    private readonly findCountryByNameService: FindCountryByNameService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'add new country.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'there is already a country with that name.',
  })
  async add(@Body() addCountryDto: AddCountryDto): Promise<Country> {
    return await this.addCountryService.addCountry(addCountryDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'find all countries.',
  })
  async find(): Promise<Country[]> {
    return await this.findAllCountriesService.findAll();
  }

  @Get(':name')
  async findCountryByName(@Param('name') name: string): Promise<Country> {
    return await this.findCountryByNameService.findByName(name);
  }
}
