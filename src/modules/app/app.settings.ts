import { ConfigModule, ConfigService } from '@nestjs/config';
import envFolderPath, { envs } from '@/config/env';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
];
