import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData/'


const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div>
      <h3>{ weekDay } hora: { hour } hrs</h3>
      <WeatherData data={data}/>
    </div>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default ForecastItem;
