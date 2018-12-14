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
    cities.map((city, index) =>
      <WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}
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
