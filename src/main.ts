import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const logger = new Logger('Main')
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<string>('port');
  const nodeEnv = config.get<string>('nodeEnv');

  await app.listen(port, () =>
    logger.log(`server is running in ${nodeEnv} mode`),
  );
}
bootstrap();
