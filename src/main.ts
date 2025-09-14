import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // create a NestJS application instance
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // start listening for incoming requests
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
