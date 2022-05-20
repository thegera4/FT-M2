import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

export function ActionButtons(props) {

    const incrementAsync = () => {
        setTimeout(props.increment, 1000);
    };

    const incrementIfOdd = () =>{
        props.count % 2 !== 0 ? props.increment() : null;
      } 

  return (
    <div>
        <button onClick={ () => props.increment() }>
            + 
        </button>
        <button onClick={ () => props.decrement() }>
            - 
        </button>
        <button onClick={ () => incrementIfOdd() }>
            Impar
        </button>
        <button onClick={() => incrementAsync() }>
            +1 despues de 1 seg
        </button> 
    </div>
  )
}

export default connect(null, { increment, decrement })(ActionButtons);
