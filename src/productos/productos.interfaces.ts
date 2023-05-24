// exportar y crear la interfaces para producto la misma
// se tiene que utilizar en el archivo productos.ts

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
  }

  export function buscarPorNombre(_nombre: string): Producto[] {
    // Lógica de búsqueda aquí
    return []; // Devuelve un arreglo vacío por ahora
  }