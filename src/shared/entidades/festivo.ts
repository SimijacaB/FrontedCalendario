export interface Festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua: number;
    idTipo: number;
    tipoFestivo: string; // Cambiado de TipoFestivo[] a string para simplificar
}

export interface TipoFestivo {
    id: number;
    tipo: string;
}