const { INCREMENTO, DECREMENTO, INCIMPAR } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

const incremento = () =>{
  return {
    type: INCREMENTO
  }
};

const decremento = () =>{
  return {
    type: DECREMENTO
  }
};

const incimpar = () =>{
  return {
    type: INCIMPAR
  }
}

const incasync = () =>{
  return (dispatch) => {
    setTimeout(() => {dispatch(incremento())}, 1000)
  }
}

module.exports = {
  incremento,
  decremento,
  incimpar, 
  incasync
}