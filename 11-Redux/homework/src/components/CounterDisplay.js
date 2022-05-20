import React from 'react'
import { connect } from 'react-redux';

export function CounterDisplay(props) {
  return (
    <div>
        Clickeado: {props.count} veces
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps, null)(CounterDisplay);

