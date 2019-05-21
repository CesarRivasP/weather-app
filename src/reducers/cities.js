import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions';


export const cities = (state = {}, action) => {
  switch (action.type){
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload;
      // return { ...state, [city]: { forecastData: forecastData/*, weather: null */}} before to issue
      //AFTER
      // return { ...state, [city]: { ...state[city], forecastData }}
      /*
        - Se debe invocar spread operator 'state' y se le pasa como valor 'city', de esta manera se esta tomando la
        propiedad 'city' dentro del objeto 'state'.
        - Se usa el spread operator de manera que el nuevo valor 'forecastData' se le suma a lo que venga
        con ...state[city]. Si ya contiene al forecastData, va a reemplazar al anterior. Si no lo contiene,
        lo agrega.
        - "city" es una variable, entonces siempre va a tener un valor diferente.
      */
      //After : La modificacion para poder validar si paso poco tiempo desde que se hizo una determinanda peticion
      return { ...state, [city]: { ...state[city], forecastData, forecastDataDate: new Date() }};  //Para que tome la fecha actual
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;  //llega el string correspondiente a la ciudad
      return { ...state, [city]: {  ...state[city], weather: null }}  // [city]: establecer el weather a null
      //Cuando se solicita el clima actual, se establece en null para que aparezca el indicador de progreso
    }
    case SET_WEATHER_CITY: {
      //cuando retorna el resultado del servidor
      const { city, weather } = action.payload;
      return { ...state, [city]: { ...state[city], weather }};
      //a base de city se genera un objeto que va a tener el weather
    }
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

//Se establecieron los reducers entre llaves para que se queden en bloques y se pueda reutilizar los nombres de
//Las constantes, ya que sino, no se puede

//selector
export const getWeatherCities =
//del state (corresponde a las cities) vamos a obtener un array con todas las ciudades a mostrar
  createSelector(state => fromObjToArray(state), cities => cities);

//Funcion auxiliar
const fromObjToArray = (cities) => (toPairs(cities).map(([key,value]) => (
  {
    key: key,
    name: key,
    data: value.weather,
  }
)));

/* El metodo de lodash se va a utilizar para la transformacion del array vacio, de manera que ahora hay que generar
una funcion basados en toPairs que va a transformar el objeto que tenemos en el state en el array que se necesitan,
que son el key, name y data (info del clima actual)
La estructura sobre la que se parte es un objeto llamado cities que tiene distintas propiedades para cada Una
de la ciudades, y dentro de cada una de propiedades tiene un objeto 'weather', y este es el que se necesita
extraer. Entonces se le va a pasar una estrucutra del tipo objeto para pasarla al tipo array
- toPairs retorna un array con clave valor donde la clave va a ser el nombre de la ciudad y el valor va a ser el
objeto weather. Sobre el array resultado, en el cual cada posicion es un array, en el cual el primer elemento
es la clave y el segundo es el contenido del objeto.
EL map se hace a[key,value], es asi porque a por cada uno de los item, se tiene una key y un value.
Sobre esos key y values se va a iterar con map y va a generar objetos como resultado de esa iteracion.
Los objetos van a tener como forma key, conformada por la key, y el name es igual al nombre de la ciudad (key), y
luego data, que se va a generar a base de 'value'.weather. Weather es el objeto que contiene los datos a usar Dentro
de data.
*/
