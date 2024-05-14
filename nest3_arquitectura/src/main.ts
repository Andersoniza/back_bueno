import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      disableErrorMessages:false,
      whitelist:true,
      forbidNonWhitelisted:true
    }
  ))


  const config=new DocumentBuilder()
  .setTitle('productos')
  .setDescription('Descripcion')
  .setVersion('1.0')
  .addTag('productos')
  .build()
  const document=SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
//end swagger
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
