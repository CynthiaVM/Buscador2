import {} from './productos/productos';
import {buscarPorNombre} from './productos/productos.interfaces';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
  </form>
  <div id="resultado-busqueda"></div>
`;

//const form = document.querySelector('form')!;
const btnBuscar = document.querySelector<HTMLInputElement>('#buscar-btn')!;
btnBuscar.addEventListener('click', (e) => {
  e.preventDefault();
  //se capturado el valor ingresado por el usuario en la variable inputValue dentro del evento click del botón de búsqueda.
  const inputValue = document.querySelector<HTMLInputElement>('#buscar-input')!.value.toUpperCase(); // Convertir a mayúsculas

  const resultado = buscarPorNombre(inputValue);
  console.log(resultado);
//creamos un elemento HTML para mostrar el resultado y agrega los valores 
const resultadoDiv = document.querySelector<HTMLDivElement>('#resultado-busqueda')!;
resultadoDiv.innerHTML = ''; // Limpiar contenido anterior

if (resultado.length > 0) {
  const resultadoHTML = document.createElement('div');
  resultadoHTML.innerHTML = `
    <h2>Resultado de la búsqueda</h2>
    <p>Nombre: ${resultado[0].nombre}</p>
    <p>Precio: ${resultado[0].precio}</p>
  `;
  
  resultadoDiv.appendChild(resultadoHTML);
} else {
  resultadoDiv.innerHTML = 'No se encontraron resultados'; //si el resultado de la búsqueda está vacío, se mostrará el mensaje "No se encontraron resultados"
}
});



	//TODo: llamar a la funcion de buscarPorNombre(inputValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado

 