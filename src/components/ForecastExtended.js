import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/';
import transformForecast from '../services/transformForecast';
import './styles.css';


// const api_key = "2655d1ef49563a6f6be6cd4971b05085";
// const url = "https://api.openweathermap.org/data/2.5/forecast";


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

// class ForecastExtended extends Component {
const ForecastExtended = ({ city, forecastData }) => (

  // constructor(){
  //   super();
  //   this.state = {
  //     forecastData: null
  //   }
  // }

  // componentDidMount(){
  //   this.updateCity(this.props.city);
  // }

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.city !== this.props.city){
  //     this.setState({
  //       forecastData: null
  //     })
  //     this.updateCity(nextProps.city);
  //   }
  // }

  // updateCity = (city) => {
  //   const url_forecast= `${url}?q=${city}&appid=${api_key}`;
  //
  //   fetch(url_forecast)
  //     .then(data => (data.json()))
  //     .then(weather_data => {
  //       console.log(weather_data)
  //       const forecastData = transformForecast(weather_data)
  //       console.log(forecastData)
  //       this.setState({ forecastData: forecastData });
  //     })
  // }

  // renderForecastItemDays(forecastData){
  //   return forecastData.map(forecast => (
  //     <ForecastItem
  //       key={`${forecast.weekDay}${forecast.hour}`}
  //       weekDay={ forecast.weekDay }
  //       hour={ forecast.hour }
  //       data={ forecast.data } />
  //   ))
  // }

  // renderProgress = () => {
  //   return <h3>"Cargando pronostico extendido .."</h3>
  // }

// render() {
    // const { city } = this.props;
    // const { forecastData } = this.state;
    // return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para { city }</h2>
        { forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()
            //Cuando son funcional components, no se usa this
        }
      </div>
    // );
);

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  // forecastData: PropTypes.array.isRequired,
  // no es necesario el required porque ya hay una validacion en el componente
  forecastData: PropTypes.array,
}

export default ForecastExtended;
