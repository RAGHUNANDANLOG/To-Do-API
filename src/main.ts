import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT ?? 3001);
// }
// bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.enableCors(); // ✅ allow cross-origin requests from frontend
//   await app.listen(3001); // ✅ change to 3001
// }
// bootstrap();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // allow requests from frontend
  await app.listen(3001); // make sure this matches your frontend axios URL
}
bootstrap();



