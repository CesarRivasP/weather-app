import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/';
import transformForecast from '../services/transformForecast';
import './styles.css';


// const days = [
//   'Lunes',
//   'Martes',
//   'Miercoles',
//   'Jueves',
//   'Viernes',
//   'Sabado',
//   'Domingo'
// ];
// const data = {
//   temperature: 10,
//   weatherState: 'normal',
//   humidity: 10,
//   wind: 'normal',
// };
const api_key = "2655d1ef49563a6f6be6cd4971b05085";
const url = "https://api.openweathermap.org/data/2.5/forecast";

// ?q={city name},{country code}

class ForecastExtended extends Component {
  constructor(){
    super();
    this.state = {
      //se va a establecer un objeto con una propiedad en la cual se va a poner todo el resultado que retorne el servidor
      //con los datos del pronostico extendido
      forecastData: null
    }
  }

/*  componentDidMount(){
    //fetch or axios
    const url_forecast= `${url}?q=${this.props.city}&appid=${api_key}`;
    // Fetch genera una promise, y se esperan los resultados con la sentencia 'then' que nos permite obtener los resultados
    //una vez que se termina de ejecutar la promise
    fetch(url_forecast)
      .then(data => (data.json()))  //se pide en formato json la data para que genere un objeto con la informacion que este llegando
      .then(weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)
        this.setState({ forecastData: forecastData });
      })
  }*/

  componentDidMount(){
    this.updateCity(this.props.city);
  }

/*
Componente de ciclo de vida que se utiliza para hacer actualizaciones, especialmente cuando se modifican las
propiedades del componente. */

  // Se ejecuta cada vez que hay una actualizacion de las propiedades
  //nextProps: proximas propiedades que se van a establecer (toddavia no se establecieron),esta en un punto previo
  //al establecimiento de las propiedades y previo a la actualizacion del componente
  //chequear sí(en las propiedades actualizadas la ciudad es la misma que se tiene estalecida)
//  nextProps.city es diferente a la ciudad que ya esta establecidad en this.props.city
  componentWillReceiveProps(nextProps){
    // sí es diferente
    if(nextProps.city !== this.props.city){
      //Para que se vea el loading hay que establecerlo antes de la funcion que llama al renderizado
      this.setState({
        forecastData: null  //Y asi aparece el indicador de carga
      })
      this.updateCity(nextProps.city);
    }
  }

  updateCity = (city) => {
    const url_forecast= `${url}?q=${city}&appid=${api_key}`;

    fetch(url_forecast)
      .then(data => (data.json()))
      .then(weather_data => {
        console.log(weather_data)
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)
        this.setState({ forecastData: forecastData });
      })
  }

  renderForecastItemDays(forecastData){
    // return "Render Items";
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={ forecast.weekDay }
        hour={ forecast.hour }
        data={ forecast.data } />
    ))
  }
  renderProgress = () => {
    return <h3>"Cargando pronostico extendido .."</h3>
  }

  render() {
    // const city = this.props.city;
    const { city } = this.props;  //Mediante Destructuring (Ultima actualizacion Ecmascript)
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico Extendido para { city }</h2>
        { forecastData ?
            this.renderForecastItemDays(forecastData) :
            this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;
/*
  - En el punto this.renderForecastItemDays(), se debe evaluar si en el estado ya esta establecido el resultado de haber hecho el fetch
*/
