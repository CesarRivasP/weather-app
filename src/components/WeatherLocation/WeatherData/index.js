//Before WeatherData
import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css';

//sin aplicar destructuring
// const WeatherData = () => (
//   <div className="weatherDataCont">
//     <WeatherTemperature
//       temperature={20}
//       weatherState={SUN}/>
//     <WeatherExtraInfo
//       humidity={80}
//       wind={"10 m/s"} />
//   </div>
// )

//Destructuring
/*const WeatherData = ({ data }) => {
  //En data se tienen estas 4 propiedades
  const { temperature, weatherState, humidity, wind } = data;
  return (
    <div className="weatherDataCont">
      <WeatherTemperature
        temperature={temperature}
        weatherState={weatherState}/>
      <WeatherExtraInfo
        humidity={humidity}
        wind={wind} />
    </div>
  );
};*/

// Aplicando una propiedad del destructuring que se utiliza cuando se tienen objetos
// complejos, cuando no solo se quiere acceder al primer nivel del paranetro que se
// quiere tomar, sino se quiere llegar a una propiedad de segundo nivel donde la
// estructura del objecto es mas compleja.
//Destructuring con objetos complejos
const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
  <div className="weatherDataCont">
    <WeatherTemperature
      temperature={temperature}
      weatherState={weatherState}/>
    <WeatherExtraInfo
      humidity={humidity}
      wind={wind} />
  </div>
);

WeatherData.propTypes = {
  // Shape: se espera un objeto con una determinada forma
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;

//Se utliza isRequired para no validar propiedades con valores nulos.
/* Doble destructuring
- El Doble destructuring es aplicado al pasarle un parametro a WeatherData desde WeatherLocation
*/
