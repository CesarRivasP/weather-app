import transformForecast from '../services/transformForecast'
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const api_key = "2655d1ef49563a6f6be6cd4971b05085";
const url = "https://api.openweathermap.org/data/2.5/forecast";

// export const setCity = (payload) => ({ type: SET_CITY, payload });
const setCity = (payload) => ({ type: SET_CITY, payload });

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

//Establece la ciudad actual y a la vez realiza la peticion al server del pronostico extendido
export const setSelectedCity = (payload) => {
  //se declara asi gracias al middlware
  return dispatch => {  //aqui se genera una funcion que tiene como parametro 'dispatch'
   const url_forecast= `${url}?q=${payload}&appid=${api_key}`;

    // accion inicial -> para establecer que se esta ajecutando una busqueda
    // por lo que se va a activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))  //ciudad que el usuario selecciono, establece la ciudad actial

    return fetch(url_forecast)
      .then(data => (data.json()))
      .then(weather_data => {
       const forecastData = transformForecast(weather_data)
        //modificar el estado con el resultado de la promise (http request== fetch)
        //el payload lleva la city de la data que se esta consultando
        // forecastData lleva la informacion del pronostico extendido de la city
        dispatch(setForecastData({ city: payload, forecastData}));
        //establece el resultado del pronostico extendido correspondiente para esa ciudad
      }
    );
  };
};

// Por convencion, en vez de de 'value' se denomina 'payload'.
