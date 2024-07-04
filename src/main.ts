import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      //deja la data que estoy esperndo
      whitelist: true,
      //Lanza error de la data que no es necesaria
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
bootstrap();
