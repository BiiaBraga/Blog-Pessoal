import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  //configuraçào da aplicação nest, cria a aplicação

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Beatriz Braga Silva","https://www.linkedin.com/in/beatriz-braga-silva","beatriz.braga.silva.dev@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);
  
  process.env.TZ = '-03:00';  // configuração do timezone
  
  app.useGlobalPipes(new ValidationPipe);  //configuração de validação de dados de entrada
  
  app.enableCors();  //configuração de cors para permitir requisições de outras origens

  await app.listen(process.env.PORT ?? 3000);  //execução da aplicação nest, vonfiguração da porta do servidor
}
bootstrap();
