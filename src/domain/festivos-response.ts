export interface FestivoResponse {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua: number;
    idTipo: number;
    tipoFestivo: TipoFestivo[];
}

export interface TipoFestivo {
    id: number;
    tipo: string;
}