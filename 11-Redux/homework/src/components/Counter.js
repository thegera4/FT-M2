import React, { Component } from "react";
import CounterDisplay from "./CounterDisplay";
import ActionButtons from './ActionButtons';

export default class Counter extends Component {
    render() {
        return (
            <>
                <CounterDisplay />
                <ActionButtons />
            </>
        );
    }
}

// La función mapStateToProps especifica qué porción del árbol de estados necesita recibir este componente.
// En este caso, dado que nuestro store de redux sólo almacena el valor del contador,
// este componente recibe el estado completo.
// Sin embargo, en una aplicación redux más compleja,
// recibiría sólo las partes relevantes que necesita del objeto de estado.
//const mapStateToProps = (state) => {
    //return {
        //count: state.count
    //};
//};

// Se llama a la función de connect para que este componente conozca el resto de la arquitectura de redux.
// Sin esto, este componente es sólo un componente tonto de React.
//Pasamos todas las funciones que dependen de Redux, junto con el propio componente,
// para que Redux se dé a conocer a este componente.
//export default connect(mapStateToProps, { increment, decrement })(Counter);
