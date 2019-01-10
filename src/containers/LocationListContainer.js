import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  //conectar react y redux
// import { setCity } from '../actions';
import { setSelectedCity, setWeather } from '../actions';
import { getWeatherCities } from '../reducers';
import LocationList from '../components/LocationList';


class LocationListContainer extends Component {
  // constructor(){
  //   super();
    //setWeather se debe ejecutar en un momento inicial, puesto que se necesita apenas aparece
    // this.props.setWeather(this.props.cities);
    //Esto se puede hacer tanto en el constructor como en el componentDidMount
  // }

  componentDidMount(){
    this.props.setWeather(this.props.cities);

  }

  handleSelectedLocation = (city) => {
    console.log(`${city} - handleSelectedLocation`);
    this.props.setSelectedCity(city);
  }

  render(){
    const { /*cities*/ citiesWeather } = this.props;
    return (
      <LocationList
        // cities={ cities }
        cities={ citiesWeather }
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  // setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state), //selector
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedCity: (value) => dispatch(setSelectedCity(value)),
  //Va a traer info de todos los climas de las ciudades
  setWeather: (cities) => dispatch(setWeather(cities)), //Representa la busqueda de la informacion, el nuevo action creator
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
