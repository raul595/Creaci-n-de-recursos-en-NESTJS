import { Min } from "class-validator";

export class CreatePeliculaDto {
    @Min(0, { message: "El valor del id tiene que ser positivo" })
    id: number;
    titulo: string;
    director: string;
    anio: number;
    @Min(0, { message: "El valor de la duración tiene que ser positivo" })
    duracion: number;
}
