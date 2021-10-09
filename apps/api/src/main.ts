/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.use(compression());
  const port = process.env.PORT || 3333;

  const config = new DocumentBuilder()
    .setTitle('Websites example')
    .setDescription('The websites API description')
    .setVersion('1.0')
    .addTag('websites')
    .addBearerAuth(
    )
    .build();
  const document = SwaggerModule.createDocument(app, config, {  });
  SwaggerModule.setup('api', app, document );

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });

}

bootstrap();
