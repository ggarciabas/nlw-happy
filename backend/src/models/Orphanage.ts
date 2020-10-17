import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './Images';

@Entity('orphanages') /* tabela no banco de dados */
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    about: string;
    @Column()
    instructions: string;
    @Column()
    opening_hours: string;
    @Column()
    open_on_weekends: boolean;
    
    // Relacionamento
    @OneToMany(() => Image, image => image.orphanage) // primeiro parâmetro informa o tipo como sendo retorno de uma função // o segundo informa o campo que identifica o relacionamento contrário, que identificará, no caso, o orfanato dentro da imagem.
    @JoinColumn({name: 'orphanage_id'}) // qual o nome da coluna que identifica o relacionamento de orfanato com imagens
    images: Image[]
}