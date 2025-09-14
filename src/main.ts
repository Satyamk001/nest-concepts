import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create a NestJS application instance
  const app = await NestFactory.create(AppModule);
  // start listening for incoming requests
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
