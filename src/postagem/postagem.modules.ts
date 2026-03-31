import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";
 
@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], //Importa o Postagem 
    providers: [PostagemService], //define o PostagemService como um provedor
    controllers: [PostagemController],
    exports: [TypeOrmModule] //exporta p typeOrmModule
})
export class PostagemModule {}