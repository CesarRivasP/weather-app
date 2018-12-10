import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import Paper from '@material-ui/core/Paper';  //Es un contenedor que provee sombras para un componente
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'; //Permite manejar distintas tipografias y sus tamaños
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ForecastExtended from './components/ForecastExtended';


const cities = [
  'Barcelona,es',
  'Buenos Aires,ar',
  'Caracas,ve',
  'Ciudad de México,mx',
  'Madrid,es',
  'Washington,us'
];

const styles = {
  root: {
    background: 'linear-gradient(to right, #485563, #29323c)' ,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    padding: '0 15px',
    boxShadow: '0 3px 5px 2px rgba(58, 58, 58, .1)',
  },
};


class App extends Component {
  constructor(){
    super();
    this.state = {
      // city: 'nueva ciudad', //para probar
      city: null
    };
  }

  handleSelectedLocation = (city) => {
    //prop declarada en el state: parametro que llega en la funcion
    // city: city equivalente a city
    this.setState({ city })
    console.log(`${city} - handleSelectedLocation`);
  }

  render() {
    const { classes, children, className, ...other } = this.props;
    const { city }= this.state;
    return (
      <Grid fluid className="App-header">
        <Row>
        <AppBar position="sticky" className={classNames(classes.root, className)} {...other}> {/*sticky: para que la barra permanezca arriba*/}
          <Toolbar>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={ cities }
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4} /*zDepth={4}*/> {/*Para realzar este contenedor*/}
              <div className="details">
                {/* { city ?
                  <ForecastExtended city={ city } /> :
                  // <h1>No se selecciono una ciudad</h1>
                  null
                } */}
                {/* Para evitar usar null */}
                {/*si viene en city establecido algun valor va renderizar el componente, si no, no renderiza nada*/
                  city &&
                  <ForecastExtended city={ city } />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}


App.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(App);

/*<Grid fluid>
  <Row
    around="xs"
  /*start="xs"*/ {/*Alinieamiento hacia el inicio de la fila*/}
    {/* Asi eran las especificaciones para la desmotracion del grid y sus propiedades. */}
    {/* <Col xsOffset={6} xs={12} sm={6} md={4} lg={3}>  Asi se establece el ancho de columna automaticamente*/}
    {/*<Col xs={2}>
      <div className="red"></div>
    </Col>
    <Col xs={2}>
      <div className="green"></div>
    </Col>
    <Col xs={2}>
      <div className="blue"></div>
    </Col>
    <Col xs={2}>
      <div className="yellow"></div>
    </Col>
  </Row>
</Grid>

<header className="App-header">
 <img src={logo} className="App-logo" alt="logo" />
 {/* <WeatherLocation city="Caracas,ve"/> */}
 /*<LocationList cities={ cities }/>
</header>*/
// city === null ? es igual a !city ? --> city es direnfente de nulo (negandola al principio para no tener que voltear las condiciones)
//!city ?  -> no es nulo | city ? -> es null
