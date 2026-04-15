//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_postagem"}) //Cria uma tabela chamada tb_postagem
export class Postagem{

    //atributos
    @ApiProperty() 
    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto increment
    id!: number;

    @IsNotEmpty() //verifica se o campo está vazio
    @Column({length: 100, nullable:false})
    @ApiProperty() 
    titulo!: string;

    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    @ApiProperty() 
    texto!: string;

    @UpdateDateColumn()
    @ApiProperty() 
    data!: Date;

    @ApiProperty({ type: () => Tema }) 
    @ManyToOne(() => Tema, (tema) => tema.postagem, {
        onDelete: 'CASCADE',
    })
    tema!: Tema;

    @ApiProperty({ type: () => Usuario }) 
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: "CASCADE"})
    usuario!: Usuario

}