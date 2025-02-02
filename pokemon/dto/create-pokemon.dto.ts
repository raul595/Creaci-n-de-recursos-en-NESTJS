import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class CreatePokemonDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  tipo: string;

  @IsInt()
  @Min(0)
  hp: number;

  @IsInt()
  @Min(0)
  @Max(999)
  ataque: number;

  @IsInt()
  @Min(0)
  @Max(999)
  defensa: number;

  @IsInt()
  @Min(0)
  @Max(999)
  ataque_sp: number;

  @IsInt()
  @Min(0)
  @Max(999)
  defensa_sp: number;

  @IsInt()
  @Min(0)
  @Max(999)
  velocidad: number;
}
