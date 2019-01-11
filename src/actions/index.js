import transformForecast from '../services/transformForecast'
import transformWeather from '../services/transformWeather';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const api_key = "2655d1ef49563a6f6be6cd4971b05085";
const url = "https://api.openweathermap.org/data/2.5/forecast";

// export const setCity = (payload) => ({ type: SET_CITY, payload });
const setCity = (payload) => ({ type: SET_CITY, payload });

const setForecastData = (payload) => ({ type: SET_FORECAST_DATA, payload });

//Establece la ciudad actual y a la vez realiza la peticion al server del pronostico extendido
export const setSelectedCity = (payload) => {
  //se declara asi gracias al middlware
  // return dispatch => {  //aqui se genera una funcion que tiene como parametro 'dispatch'
  //Para agregar la validacion de la peticion con respecto al tiempo
  //Hay que acceder al state de la app, por lo que el segundo parametro del redux thunk es el getState
  //getState es una funcion que obtiene el estado global de la aplicacion
  return (dispatch, getState) => {

   const url_forecast= `${url}?q=${payload}&appid=${api_key}`;

    // accion inicial -> para establecer que se esta ajecutando una busqueda
    // por lo que se va a activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));  //ciudad que el usuario selecciono, establece la ciudad actial

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const now = new Date();

    if(date && (now - date) < 1* 60 * 1000){ //la diferencia viene en milisegundos alo multiplicar x 1000
      //Si hace menos de un minuto se solicito el forescastData, no volvera a hacer la peticion
      return;
    }

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

//Va a establecer el clima actual de cada una de las ciudades
export const setWeather = (payload) => {
  //EN payload llega un array con todas las ciudades
  return dispatch => {
    payload.forEach(city => {
      //se va a ejecutar por cada una de las ciudades a medida que se ejecuta el foreach
      dispatch(gettWeatherCity(city));

      const api_weather = getUrlWeatherByCity(city);

      fetch(api_weather)
        .then(resolve => {
            return resolve.json();
        })
        .then(weather_data => {
          const weather = transformWeather(weather_data);

          dispatch(setWeatherCity({ city, weather }));
        });
    });
  }
}

//Va a solicitar la informacion al servidor
const gettWeatherCity = (payload) => ({ type: GET_WEATHER_CITY, payload });

//Con la info que retorne el server, lo va a establecer en el estado global
const setWeatherCity = (payload) => ({ type: SET_WEATHER_CITY, payload });


//setWeather internamente va a estar estableciendo los datos dentro del array cities, para luego pasarlos a locationList
// Por convencion, en vez de de 'value' se denomina 'payload'.
