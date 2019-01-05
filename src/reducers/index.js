import { combineReducers } from 'redux';
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities,
 } from './cities';
import { city } from './city';

export default combineReducers({
//reducer's
  cities,
  city
});

export const getCity = (state) => (state.city); //Other selector
                              //recibe el state global => llama a la funcion original, y a esta se le pasa state.cities, state.city
export const getForecastDataFromCities = (state) => (_getForecastDataFromCities(state.cities, getCity(state)/*state.city*/));


/*
Al importar getForecastDataFromCities desde cities la funcion original con un alias para poder reutlizarla con el mismo nombre.
El alias _getForecastDataFromCities nos permite llamar desde 'export ..getForecastDataFromCities' a la funcion original.
Con este refactor se logra mayor abstraccion de donde se obtiene el dato forecastData.
EL refactor de state.city es para no tener distintos puntos donde se conoce como esta conformado la estructura del reducer de city
*/
