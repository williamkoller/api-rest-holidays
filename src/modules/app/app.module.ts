import { Module } from '@nestjs/common';
import { imports, controllers } from './app.settings';

@Module({
  imports,
  controllers,
  providers: [],
})
export class AppModule {}
