/* eslint-disable prettier/prettier */
//importações
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ILike, Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class PostagemService { //classe de serviço
  
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}

    //metódo para encontrar todas as postagens
    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); //select * from tb_postagem
    }

    //metódo para encontrar uma postagem pelo seu Id
    async findById(id: number): Promise<Postagem> {
 
        const postagem = await this.postagemRepository.findOne({
            where: {
                id
            }
        });
 
        if (!postagem)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
 
        return postagem;
 
    }

    //metódo para encontrar as postagem por um  titulo
    async findAllByTitulo(titulo: string): Promise<Postagem[]> {
        return await this.postagemRepository.find({
            where: {
                titulo: ILike(`%${titulo}%`)
            }
        });
    }

    //método que cadastra postagem no bd
    async create(postagem: Postagem): Promise<Postagem>{
        return await this.postagemRepository.save(postagem);
    }

    //método que atualiza
    async update(postagem: Postagem): Promise<Postagem>{
        await this.findById(postagem.id)
        return await this.postagemRepository.save(postagem);
    }

    //metodo que deleta uma postagem
    async delete(id:number):Promise <DeleteResult>{
        await this.findById(id);
        return await this.postagemRepository.delete(id);
    }

}

