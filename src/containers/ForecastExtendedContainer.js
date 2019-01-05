import React, {Component} from 'react';
import ForecastExtended from '../components/ForecastExtended'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities } from '../reducers/cities';

class ForecastExtendedContainer extends Component {

  render() {
    const { city, forecastData } = this.props;

    return (
      city &&
        <ForecastExtended city={ city } forecastData={ forecastData } />
    )
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
}

// const mapStateToProps = (state) => ({ city: state.city });
//const mapStateToProps = ({ city, cities }) => (
const mapStateToProps = state => (  //state para no tener conocimiento (sea visible) de lo que contiene state
  {
    //city before
    city: state.city, //after
    // buscar en cities[en la ciudad seleccionada]. el forecastData
    // before ->forecastData: cities[city] && cities[city].forecastData, // <- para que del estado global de la app nos venga esta info
    //De no hacer la validacion, da error porque en un inicio city es null

    // En este container, necesitamos solo la parte del estado que tiene forecastData para la ciudad que se selecciono.
    // Este container tiene un amplio conocimiento con respecto al estado global de la app, a la estructura del estado bastante importante.

    //Generacion de un selector en el reducer de cities, puesto que es el lugar en donde se conoce el estado, su estructura.
    //Por eso es el punto mas adecuado para establecer un selector
    //AFTER
    forecastData: getForecastDataFromCities(state.cities, state.city), //abstraccion del estado de la app mediante selectors
  }
); //Simplificado mediante destructuring
//toma la propiedad city que esta dentro de state, luego se asigna -- city = city  === city

export default connect(mapStateToProps, null)(ForecastExtendedContainer);

/*
Dentro de cities hay un diccionario 'cities[city]'. De ese diccionario se toma una entrada, y de ahi se llega al forecastData */
