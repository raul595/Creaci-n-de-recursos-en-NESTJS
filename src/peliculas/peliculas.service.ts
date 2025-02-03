import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula, 'Pelicula')
    private peliculaRepository: Repository<Pelicula>,
  ) {}

  create(pelicula: Pelicula) {
    return this.peliculaRepository.save(pelicula);
  }

  findAll() {
    return this.peliculaRepository.find();
  }

  findOne(id: number) {
    return this.peliculaRepository.findOne({ where: { id } });
  }

  update(id: number, pelicula: Partial<Pelicula>) {
    return this.peliculaRepository.update(id, pelicula);
  }

  // Método agregado para eliminar una película por su titulo
  remove(titulo: number) {
    return this.peliculaRepository.delete(titulo);
  }
}



