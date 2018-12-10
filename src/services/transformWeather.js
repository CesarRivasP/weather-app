import convert from 'convert-units';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';

const getTemp = (kelvin) => {
  /*
    .from(indicar que el dato esta en kelvin).to(resultado a obtener ' grados celsius';
  */
  return convert(kelvin).from("K").to('C').toFixed(0);
  //toFixed para indicar que solo se quieren dos decimales
}

const getWeatherState = (weather) => {
  const { id } = weather;

  if(id < 300){
    return THUNDER;
  }
  else if(id < 400){
    return DRIZZLE;
  }
  else if(id < 600){
    return RAIN;
  }
  else if(id < 700){
    return SNOW;
  }
  else if(id === 800){
    return SUN;
  }
  else{
    return CLOUD;
  }
}

const transformWeather = (weather_data) => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0]); //Para asignar segun el id que icono se debe usar
  const temperature = getTemp(temp);

  const data = {
    humidity,
    //temperature: temp,     //temp viene en grados Kelvin-- antes de usar convert-units
    temperature,
    weatherState,
    wind: `${speed} m/s`
  }

  return data;
}

export default transformWeather;

/*
  Una vez se convierten estas funciones que estaban a nivel de clase,
  estas deben ser alojadas en una variable, y se les quita el 'this'
  que hacia referencia a la clase 'weatherLocation', el cual ya no esta
  y por eso se eliminan los this.

*/
