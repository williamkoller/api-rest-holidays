import { ConfigModule } from '@nestjs/config';
import envFolderPath, { envs } from '@/config/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { CountriesModule } from '@/modules/countries/countries.module';
import { TypeOrmConfig } from '@/config/typeorm';
import { AppController } from '@/modules/app/controllers/app.controller';
import { CitiesModule } from '@/modules/states/cities.module';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  TypeOrmModule.forRoot(TypeOrmConfig),
  forwardRef(() => CountriesModule),
  forwardRef(() => CitiesModule),
];

export const controllers = [AppController];
