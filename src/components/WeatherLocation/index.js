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
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';


class WeatherLocation extends Component {
  constructor(props){
    super(props);
    const { city } = props;
    this.state = {
      city,
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

  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);

    fetch(api_weather).then(resolve => {
        return resolve.json();
        //debugger;
    }).then(data => {
      console.log(data)
      // debugger;
      console.log("resolve handleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather)
      //debugger;
      this.setState({
        data: newWeather
      })
    })
    console.log("Actualizado");
  }

  render(){
    const { city, data } = this.state;
    const { onWeatherLocationClick } = this.props;
    console.log("render");
    return(
       <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
         <Location
           city={ city }/>
         { data ?
           <WeatherData data={ data } /> : <CircularProgress size={50} /> }
       </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;
