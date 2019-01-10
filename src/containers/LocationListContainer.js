import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  //conectar react y redux
// import { setCity } from '../actions';
//import { setSelectedCity, setWeather } from '../actions';
//Para simplificar las acciones a utlizar una vez se aplica bindActionCreators
import * as actions from '../actions';//Es un alias que podria sea cualquiera
//El * implica que se va a tomar todo lo que este dentro de un determinado archivo, es decir, todo lo que
//sea exportado del archivo '../actions' va a ser inyectado en el alias 'actions'.
//Como un namespace que adentro trae todas las exportaciones que se realizaron dentro del archivo
import { getWeatherCities, getCity } from '../reducers';
import LocationList from '../components/LocationList';


class LocationListContainer extends Component {
  // constructor(){
  //   super();
    //setWeather se debe ejecutar en un momento inicial, puesto que se necesita apenas aparece
    // this.props.setWeather(this.props.cities);
    //Esto se puede hacer tanto en el constructor como en el componentDidMount
  // }

  componentDidMount(){
    const { setWeather, setSelectedCity, cities, city } = this.props;

    setWeather(cities);
    //after
    setSelectedCity(city);
    //setSelectedCity es el responsable de realizar la accion de busqueda del pronostico extendido
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
  setWeather: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  citiesWeather: getWeatherCities(state), //selector
  //Para acceder a la ciudad inicial
  city: getCity(state), //Para poder llegarle al initial state (ciudad) que se tiene declarado en store
})

//Before bindActionCreators
// const mapDispatchToProps = (dispatch) => ({
//   setSelectedCity: (value) => dispatch(setSelectedCity(value)),
//   //Va a traer info de todos los climas de las ciudades
//   setWeather: (cities) => dispatch(setWeather(cities)), //Representa la busqueda de la informacion, el nuevo action creator
// });

// after bindActionCreators
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);
//actions contiene todas las acciones que podrian ser utilizadas
//Esto solo hace un bind de los createActions que estan dentro de 'actions', y generar un objeto
//Ese objeto va a contener las mismas claves y propiedades que los actions que vienen de la manera normal
//Es equivalente a la  declaracion de mapDispatchToProps corriente, solo nos permite escribir menos codigo

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
