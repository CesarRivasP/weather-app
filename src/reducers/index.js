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

//AFTER
export const getCity = createSelector(state => state.city, city => city);
//createSelector(funcion como un selector, funcion resultante )
//La resultfunc va a recibir como parametro lo que arroje el anterior selector. Va a recibir 'city' => para obtener 'city'
                                              //del state => toma solo la cities,
export const getForecastDataFromCities =
  createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);
