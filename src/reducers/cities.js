import { createSelector } from 'reselect';
import { SET_FORECAST_DATA } from '../actions';

export const cities = (state = {}, action) => {
  switch (action.type){
    case SET_FORECAST_DATA:
        const { city, forecastData } = action.payload;
        return { ...state, [city]: { forecastData: forecastData/*, weather: null */}}
      break;
    default:
      return state;
  }
}


//selector -before                        state,citySelected => state que maneja cities (el estate que maneja el reducer anterior y no al state global de la app)
//export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData   //si es diferente de null
//Este selector obtiene el forecastData para la ciudad seleccionada

//Obtener la informacion del forecast (pronostico extendido) desde las ciudades.

/*
[city]: {forecastData: forecastData, weather: null}   //el nombre de la ciudad va a ser una clave
ESta es la primera entrada del diccionario correspondiente a la ciudad que se seleccione

- state[city] state de la ciudad seleccionada
- ese state tiene el diccionario (cities) donde estan todas las ciudades visitadas anteriormente
*/


//after
export const getForecastDataFromCities =
  createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);
//obtiene el forecastData y despues se le indica que eso sea el resultado final
