import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities
 } from './cities';
import { city } from './city';

export default combineReducers({
//reducer's
  cities,
  city
});
//before
// export const getCity = (state) => (state.city); //Other selector
                              //recibe el state global => llama a la funcion original, y a esta se le pasa state.cities, state.city
// export const getForecastDataFromCities = (state) => (_getForecastDataFromCities(state.cities, getCity(state)/*state.city*/));

/*
Al importar getForecastDataFromCities desde cities la funcion original con un alias para poder reutlizarla con el mismo nombre.
El alias _getForecastDataFromCities nos permite llamar desde 'export ..getForecastDataFromCities' a la funcion original.
Con este refactor se logra mayor abstraccion de donde se obtiene el dato forecastData.
EL refactor de state.city es para no tener distintos puntos donde se conoce como esta conformado la estructura del reducer de city
*/

//AFTER
export const getCity = createSelector(state => state.city, city => city);
//createSelector(funcion como un selector, funcion resultante )
//La resultfunc va a recibir como parametro lo que arroje el anterior selector. Va a recibir 'city' => para obtener 'city'
                                              //del state => toma solo la cities,
export const getForecastDataFromCities =
  createSelector(state => state.cities, getCity, _getForecastDataFromCities);
//Antes en getCity se le pasaba el state, y se obtenia la ciudad para pasarla como parametro a _getForecastDataFromCities
//Como el state lo esta invocando directamente la libreria mediante el createSelector, solo hay que pasarle el selector 'getCity'
//Se tienen dos funciones que retornan dos resultados. La resultfunc va a tener como parametro a (cities, city) y con eso se obtiene la porcion
//del estado que se requiere.

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
