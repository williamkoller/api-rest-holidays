import { ConfigModule } from '@nestjs/config';
import envFolderPath, { envs } from '@/config/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef } from '@nestjs/common';
import { CountriesModule } from '../countries/countries.module';
import { TypeOrmConfig } from '@/config/typeorm';
import { AppController } from './app.controller';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  TypeOrmModule.forRoot(TypeOrmConfig),
  forwardRef(() => CountriesModule),
];

export const controllers = [AppController];
