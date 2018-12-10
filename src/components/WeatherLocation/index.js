//before WeatherLocation
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { SUN } from '../../constants/weathers';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

//Datos iniciales (No reales)
// const data = {
//   temperature: 20,
//   weatherState: SUN,
//   humidity: 15,
//   wind: '10 m/s',
// }

// const data2 = {
//   temperature: 15,
//   weatherState: WINDY,
//   humidity: 10,
//   wind: '30 m/s',
// }

// -- Before --
// //Componente Funcional - Functional Component
// const WeatherLocation =  () => (
//   <div className="weatherLocationCont">
//     <Location city={'Caracas'}/>
//     <WeatherData data={data} />
//   </div>
// );

// -- After --
class WeatherLocation extends Component {
  //para que WeatherLocation acepte propiedades, hay que pasarselas por el constructor
  constructor(props){
    //Donde empieza la creacion del componente
    super(props); //'props' hay que pasarselo al super constructor de manera que se construya correctamente el componente
    //Es el constructor del componente base desde donde extiende nuestro componente.
    const { city } = props; // -> Una de la propiedades de 'props' es 'city'. City declarado mediante destructuring
    this.state = {  //Estado local de nuestro componente
      // city: 'Caracas',
      city, // -> city: city
      // data: data,
      data: null,
    };
    console.log("Constructor");
  }

  componentDidMount(){
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate");
  }

//React no recomienda su uso
//Van a ser eliminados en la version 17
  // componentWillMount(){
  //   console.log("UNSAFE componentWillMount");
  //Para que busque los datos del servidor lo antes posible, antes de que se renderice
  // this.handleUpdateClick();
  // }
  // //UNSAFE: Este prefijo indica que estan marcados como inseguros.
  // componentWillUpdate(nextProps, nextState){
  //   console.log("UNSAFE componentWillUpdate");
  // }

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city); //Esta sentencia no iba al comienzo

    fetch(api_weather).then(resolve => {
        //console.log(resolve); //el parametro resolve es igual a informacion de cabecera (header)
        //Body llega como un string, sin el metodo .json aun no es utilizable.
        return resolve.json();  //retorna una nueva promise,
                                //la cual se pueden obtener en el siguiente .then
        //debugger;
    }).then(data => {
      console.log(data) //Data el es resultado de la promise.
      // debugger;
      console.log("resolve handleUpdateClick");
      //const newWeather = this.getData(data);
      const newWeather = transformWeather(data);
      console.log(newWeather) //Data el es resultado de la promise.
      //debugger;
      this.setState({
        data: newWeather
      })
    })
    console.log("Actualizado");

    // this.setState({
    //   // city: 'Caracas', Solo se pasan aquellos datos que se estan modificando
    //   data: data2,
    // });
  }

  render(){
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    console.log("render");
    return(
       <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
         {/*
           Aqui se genera un evento que es pasado por parametro. 1.- Nivel de Burbujeo
           */}
         <Location
           city={ city }/>
         { data ?
           <WeatherData data={ data } /> : <CircularProgress size={50} /> }
         {/* <MuiThemeProvider theme={theme}>
           <br />
           <Button
             variant="outlined"
             color="primary"
             //El this se utiliza para asociar el onClick a la funcion handleUpdateClick
             onClick={this.handleUpdateClick}>Actualizar
           </Button>
         </MuiThemeProvider> */}
       </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
//Componente que va a proveer la informacion del clima para una locacion determinada
