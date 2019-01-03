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

/*
[city]: {forecastData: forecastData, weather: null}   //el nombre de la ciudad va a ser una clave
ESta es la primera entrada del diccionario correspondiente a la ciudad que se seleccione
*/
