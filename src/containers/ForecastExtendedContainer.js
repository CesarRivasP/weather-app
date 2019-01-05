import React, {Component} from 'react';
import ForecastExtended from '../components/ForecastExtended'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
const mapStateToProps = ({ city, cities }) => (
  {
    city,
    // buscar en cities[en la ciudad seleccionada]. el forecastData
    forecastData: cities[city] && cities[city].forecastData, // <- para que del estado global de la app nos venga esta info
    //De no hacer la validacion, da error porque en un inicio city es null
  }
); //Simplificado mediante destructuring
//toma la propiedad city que esta dentro de state, luego se asigna -- city = city  === city

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
