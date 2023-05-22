import {} from './productos/productos';
import {Producto } from './productos/productos.interfaces';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
</form>
`;

//const form = document.querySelector('form')!;
const btnBuscar = document.querySelector<HTMLInputElement>('#buscar-btn')!;
btnBuscar.addEventListener('click', (e) => {
  e.preventDefault();
  //se capturado el valor ingresado por el usuario en la variable inputValue dentro del evento click del botón de búsqueda.
  const inputValue = document.querySelector<HTMLInputElement>('#buscar-input')!.value;

  const resultado = buscarPorNombre(inputValue);
  console.log(resultado);
});

const productos: Producto[] = [
  { id: 1, nombre: 'Producto 1', precio: 10.99 },
  { id: 2, nombre: 'Producto 2', precio: 20.99 },
  { id: 3, nombre: 'Producto 3', precio: 30.99 },
];

	//TODo: llamar a la funcion de buscarPorNombre(inputValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado

  function buscarPorNombre(inputValue: string): Producto[] {
    const resultados: Producto[] = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(inputValue.toLowerCase())
    );
    return resultados;
  }