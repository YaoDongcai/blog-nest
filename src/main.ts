import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 增加全局api
  app.setGlobalPrefix('blog');
  await app.listen(3000);
}
bootstrap();
