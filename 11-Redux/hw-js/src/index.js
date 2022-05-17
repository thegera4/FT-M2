const { createStore } = require('redux');
const reducer = require('./reducer');
const { incremento, decremento, incimpar, incasync } = require('./actions');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(reducer);

// Obtenemos el elemento con el id `valor`.
var valor = document.querySelector('#valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let actualValue = store.getState().contador;
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = actualValue;
  console.log(incimpar())
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:
store.subscribe(renderContador);


// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:
let btnAdd = document.querySelector('#incremento');
let btnSub = document.querySelector('#decremento');
let btnImp = document.querySelector('#incrementoImpar');
let btnAsync = document.querySelector('#incrementoAsync');

btnAdd.onclick = () => store.dispatch(incremento());
btnSub.onclick = () => store.dispatch(decremento());  
btnImp.onclick = () => store.dispatch(incimpar());
btnAsync.onclick = () => {
  setTimeout(() => {
    store.dispatch(incasync());
  }, 1000);
}