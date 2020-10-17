import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('images') /* tabela no banco de dados */
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    path: string;
}