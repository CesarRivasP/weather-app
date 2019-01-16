import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/';
import './styles.css';


const renderForecastItemDays = (forecastData) => {
  return forecastData.map(forecast => (
    <ForecastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={ forecast.weekDay }
      hour={ forecast.hour }
      data={ forecast.data }
    />
  ))
}

const renderProgress = () => {
  return <h3>"Cargando pronostico extendido .."</h3>
}


const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className="forecast-title">Pronóstico Extendido para { city }</h2>
    { forecastData ?
        renderForecastItemDays(forecastData) :
        renderProgress()
        //Cuando son funcional components, no se usa this
    }
  </div>
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  // no es necesario el required porque ya hay una validacion en el componente
  forecastData: PropTypes.array,
}

export default ForecastExtended;
