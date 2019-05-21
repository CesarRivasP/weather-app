import React from 'react';
import WeatherLocation from './WeatherLocation/'
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherLocationClick = (city) => {
    console.log("handleWeatherLocationClick");
    onSelectedLocation(city);
  }

  const asingComponents = (cities) => (
    // cities.map((city, index) =>
    cities.map(city =>
      <WeatherLocation
        // key={city}
        key={city.key}
        // city={city}
        city={city.name}
        // onWeatherLocationClick={() => handleWeatherLocationClick(city)}
        onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
        //AFTER
        data={city.data}
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
