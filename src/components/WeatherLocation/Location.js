import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';


//Antes de simplificar los parametros, esta es la forma usual de llevarlo a cabo
/*const Location = (props) => {
  console.log(props)
  //debugger; //Punto de interrupcion
  //const city = props.city forma normal
  //Destructuring - La linea anterior se puede simplificar asi:
  const { city } = props;
  return (
    <div>
      <h1>{city}</h1>
    </div>
  )
}
*/

const Location = ({ city } ) => {
  return (
    <div className="locationCont">
      <h1>{ city }</h1>
    </div>
  )
}


Location.propTypes = {
  city: PropTypes.string.isRequired,
}
export default Location;

/*
- 'city' es una propiedad que es parte del objeto (props), esta propiedad se
le asigno a la constante 'city' de igual nombre. */
