import { Module } from '@nestjs/common';
import { imports, providers, controllers } from './countries.settings';

@Module({
  imports,
  providers,
  controllers,
})
export class CountriesModule {}
