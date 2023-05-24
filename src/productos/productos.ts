import { Producto } from './productos.interfaces';

// TODO: Implementar la interfaz en productosdb
export const productosdb: Producto[] = [
  {
    id: 1,
    nombre: 'Leche',
    precio: 2.99,
  },
  {
    id: 2,
    nombre: 'Pan',
    precio: 1.99,
  },
  {
    id: 3,
    nombre: 'Huevos',
    precio: 4.49,
  },
  {
    id: 4,
    nombre: 'Cereal',
    precio: 3.79,
  },
  {
    id: 5,
    nombre: 'Carne',
    precio: 9.99,
  },
  {
    id: 6,
    nombre: 'Queso',
    precio: 5.49,
  },
];

export const buscarPorNombre = (nombre: string): Producto[] => {
  const resultado: Producto[] = productosdb.filter((producto) =>
    producto.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  console.log('Resultado de búsqueda:', resultado); // Verificar el resultado de la búsqueda

  return resultado;
};


// crear una funcion que busque en el array de productos y devuelva un listado de productos que
// coincida con el parametro de busqueda ejemplo
// buscarPorNombre("leche") 
// resultado esperado
// {
// 	id: 1,
// 	nombre: 'Leche',
// 	precio: 2.99,
// }