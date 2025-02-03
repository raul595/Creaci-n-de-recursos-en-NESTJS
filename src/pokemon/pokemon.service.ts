import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon,)
    private readonly pokemonRepository: Repository<Pokemon>,
  ) {}

  // CREATE
  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const newPokemon = this.pokemonRepository.create(createPokemonDto);
    return this.pokemonRepository.save(newPokemon);
  }

  // READ ALL
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }

  // READ ONE
  async findOne(id: number): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findOne({ where: { id } });
    if (!pokemon) {
      throw new NotFoundException(`Pokemon con ID ${id} no encontrado`);
    }
    return pokemon;
  }

  // UPDATE
  async update(id: number, updatePokemonDto: UpdatePokemonDto): Promise<Pokemon> {
    const pokemon = await this.findOne(id);
    Object.assign(pokemon, updatePokemonDto);
    return this.pokemonRepository.save(pokemon);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const pokemon = await this.findOne(id);
    await this.pokemonRepository.remove(pokemon);
  }
}

