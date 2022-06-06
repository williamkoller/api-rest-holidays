import { ConfigModule, ConfigService } from '@nestjs/config';
import envFolderPath, { envs } from '@/config/env';
import { MongooseModule } from '@nestjs/mongoose';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('mongoUri'),
    }),
  }),
];
