import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGODB_URI,
  synchronize: true,
  autoLoadEntities: true,
  useUnifiedTopology: true,
};
