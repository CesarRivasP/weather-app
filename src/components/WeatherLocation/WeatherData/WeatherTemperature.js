import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'
import {
  CLOUD,
  // CLOUDY,
  SUN,
  RAIN,
  SNOW,
  // WINDY
  THUNDER,
  DRIZZLE
} from '../../../constants/weathers';
import './styles.css';

/* constante que va a tener el diccionario donde va a llegar el estado del
clima y va a retornar el nombre del icono.*/
const icons = {
  [SUN]: 'day-sunny', //Asi se pasan las constantes como nombres de propiedades.
  [CLOUD]: 'cloud',     //Este es el mapeo entre la presentacion que se le da al clima
  // [CLOUDY]: 'cloudy',   // y el icono que finalmente se muestra.
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  // [WINDY]: 'windy',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-shower',
}
//Funcion para cambiar el name, es decir, el icono a utlizar.
const getWeatherIcon = weatherState => {
//en base a icons con lo que venga en 'weatherState' obtenga un determinado icon
  const icon = icons[weatherState]
  //En que caso que venga nulo, se retornara un icono por defecto para que muestre algo
  const sizeIcon= "2x";
  if(icon) // si icon es diferente de null
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
  else //si es null
    return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    { getWeatherIcon(weatherState) }
    <span className="temperature">{ `${temperature}` }</span>
    <span className="temperatureType"> C°</span>
  </div>
);

/* - Validacion para las dos propiedades (temperature, weatherState)
     que se pasan como parametro para este componente. */
WeatherTemperature.propTypes = {
  //temperature es de tipo numerico
  temperature: PropTypes.number.isRequired,
  //weatherState es de tipo string
  weatherState: PropTypes.string.isRequired,
  //isRequired es para que no valide valores nulos
};

export default WeatherTemperature;

/*
  - AL invocarse la funcion getWeatherIcon esta retorna condigo jsx, en el
  cual en base a lo que llegue como weatherState se va a cambiar el 'name'
  del icono que se debe aplicar.
  - La constante icons hace una equivalencia entre lo que esta viniendo para
  establecer como valor de clima para ese control, con lo que necesita el control
  WeatherIcons
*/
