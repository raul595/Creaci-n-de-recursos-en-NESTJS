import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn() // Genera un id autoincremental
    id: number;

    @Column({ type: 'varchar', })
    nombre: string;

    @Column({ type: 'varchar', })
    tipo: string;

    @Column({ type: 'int',  })
    hp: number;

    @Column({ type: 'int',  })
    ataque: number;

    @Column({ type: 'int', })
    defensa: number;

    @Column({ type: 'int', })
    ataque_sp: number;

    @Column({ type: 'int', })
    defensa_sp: number;

    @Column({ type: 'int', })
    velocidad: number;

    @Column({ type: 'varchar', })
    habilidad: string;
}

