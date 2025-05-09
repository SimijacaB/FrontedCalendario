export interface Festivo {
  id: number;
  nombre: string;
  fecha: string; // formato ISO: 'YYYY-MM-DD'
  tipo: TipoFestivo;
}

export interface FestivoResponseDTO {
  nombre: string;
  fecha: string;
  tipo: string;
}

export enum TipoFestivo {
  NACIONAL = 'NACIONAL',
  RELIGIOSO = 'RELIGIOSO',
  CIVICO = 'CIVICO',
  OTRO = 'OTRO'
}
