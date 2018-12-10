import React from 'react';
import WeatherLocation from './WeatherLocation/'
import PropTypes from 'prop-types';
import './styles.css'; //Asi, esto le dice a webpack que lo empaquete en el bundle este archivo css

// const asingComponents = (cities) => (
//   cities.map((city, index) => <WeatherLocation key={city} city={city} />)
// );  //city funciona como key porque se tiene la certeza de que va a ser unica como clave, no se va a repetir.
// //Entonces queda como clave natural, la cual no depende de la ubicacion de los elementos dentro del array.

const LocationList = ({ cities, onSelectedLocation }) => {
  // console.log(cities);
  const handleWeatherLocationClick = (city) => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
  }
  //Como weatherLocation va a emitir un evento y a su vez este se va a disparar en locationList, hay que
  //poner la funcion asingComponents dentro de este componente funcional
  const asingComponents = (cities) => (
    cities.map((city, index) =>
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
      /*
        Aqui se le esta pasando a cada componente generado una funcion sin parametros con la cual se genera
        una nueva funcion con parametros como la ciudad que llega por medio de la funcion map del array, y
        al generarse esta nueva funcion ejecuta otra funcion que le llega al componente como parametro
        a LocationList, esa funcion se la esta pasanado la App.js, el componente de mas arriba.
        */
      />
    )
  );

  return (
    <div className="locationList">
      { asingComponents(cities) }
    </div>
  );
}


LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
};

export default LocationList;
