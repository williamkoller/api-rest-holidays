import { ConfigModule } from '@nestjs/config';
import envFolderPath, { envs } from '@/config/env';
import { TypeOrmConfig } from '@/config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  TypeOrmModule.forRoot(TypeOrmConfig),
];
