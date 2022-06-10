import { Module } from '@nestjs/common';
import {
  imports,
  providers,
  controllers,
  exportings,
} from './countries.settings';

@Module({
  imports,
  providers,
  controllers,
  exports: exportings,
})
export class CountriesModule {}
