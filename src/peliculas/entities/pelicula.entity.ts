import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Pelicula {
    @PrimaryGeneratedColumn()
      id: number;
      @Column({ type: 'varchar', length: 50 })
        titulo: string;
      @Column({ type: 'varchar', length: 50 })
        director: string;
      @Column()
        anio: number;
      @Column()
        duracion: number;
}
