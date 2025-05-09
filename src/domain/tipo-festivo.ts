// src/app/core/models/tipo-festivo.ts
export interface TipoFestivo {
    id: number;          // Identificador único
    nombre: string;      // Ejemplo: "Navidad", "Año Nuevo"
    fecha: string;       // Formato: "YYYY-MM-DD" o Date si prefieres
    descripcion?: string; // Opcional
    esNacional?: boolean; // Opcional: para festivos nacionales/locales
  }