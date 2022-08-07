import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const swagger = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Exemplo da API Rest de Feriados')
    .setDescription('Descricao da API Rest de Feriados')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};
