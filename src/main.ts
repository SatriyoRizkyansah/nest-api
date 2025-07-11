import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT ?? 3000);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Nest API')
    .setDescription('Nest api coba')
    .setVersion('1.0')
    // .addBearerAuth() // kalau pakai auth
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // bisa akses di /api

  // await app.listen(3000);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
