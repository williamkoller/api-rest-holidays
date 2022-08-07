import { Module } from '@nestjs/common';
import { imports, providers, controllers } from './cities.settings';

@Module({
  imports,
  providers,
  controllers,
})
export class CitiesModule {}
