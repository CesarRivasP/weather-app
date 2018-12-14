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


const icons = {
  [SUN]: 'day-sunny',
  [CLOUD]: 'cloud',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-shower',
}

const getWeatherIcon = weatherState => {

  const icon = icons[weatherState]
  const sizeIcon= "2x";
  if(icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
  else
    return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="weatherTemperatureCont">
    { getWeatherIcon(weatherState) }
    <span className="temperature">{ `${temperature}` }</span>
    <span className="temperatureType"> C°</span>
  </div>
);


WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
