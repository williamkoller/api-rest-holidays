import { InternalServerErrorException } from '@nestjs/common';

export class AddCountryService {
  async addCountry() {
    throw new InternalServerErrorException();
  }
}
