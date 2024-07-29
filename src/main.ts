import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const config = new DocumentBuilder()
  .setTitle('Tournament API')
  .setDescription('The Tournament API documentation')
  .setVersion('1.0')
  .addTag('tournaments')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 4000;

  app.setGlobalPrefix('/api/v1');

  const swaggerPath = 'api/swagger';

  SwaggerModule.setup(swaggerPath, app, document);
  await app.listen(port)
  console.log(`Application is running on: http://localhost:${port}/api/v1`);
  console.log(`Swagger available on: http://localhost:${port}/${swaggerPath}`);
  
}
bootstrap();
