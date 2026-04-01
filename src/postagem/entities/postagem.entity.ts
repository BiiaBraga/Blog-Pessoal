//importações
import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagem"}) //Cria uma tabela chamada tb_postagem
export class Postagem{

    //atributos
    @PrimaryGeneratedColumn() // Cria uma chave primaria e auto increment
    id!: number;

    @IsNotEmpty() //verifica se o campo está vazio
    @Column({length: 100, nullable:false})
    titulo!: string;

    @IsNotEmpty()
    @Column({length:1000, nullable:false})
    texto!: string;

    @UpdateDateColumn()
    data!: Date;

}