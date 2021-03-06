//Before WeatherData
import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import PropTypes from 'prop-types';
import './styles.css';


const WeatherData = ({ data: { temperature, weatherState, humidity, wind } }) => (
  <div className="weatherDataCont">
    <WeatherTemperature
      temperature={parseInt(temperature,10)}
      weatherState={weatherState}/>
    <WeatherExtraInfo
      humidity={humidity}
      wind={wind} />
  </div>
);

WeatherData.propTypes = {
  // Shape: se espera un objeto con una determinada forma
  data: PropTypes.shape({
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

export default WeatherData;
