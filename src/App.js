import React, { Component } from 'react';
//import { createStore } from 'redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import LocationList from './components/LocationList';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
//import { store } from './store';
import './App.css';
// import ForecastExtended from './components/ForecastExtended';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'
// import { setCity } from './actions';
import LocationListContainer from './containers/LocationListContainer'


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
                                  //
// const store = createStore(()=> {}, //Generar el store
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Instalación del devtools
// );

// const setCity = (value) => ({ //esta forma de generar acciones se denomina actionCreator
//   type: 'setCity',
//   value //value:value
// });


class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     city: null
  //   };
  // }

  // handleSelectedLocation = (city) => {
  //   this.setState({ city })
  //   console.log(`${city} - handleSelectedLocation`);
  //   // { type: nombre de la accion, valor que se va a pasar }
  //   // store.dispatch({ type: 'setCity', value: city})
  //   // const action = { type: 'setCity', value: city };  --> No es recomendado
  //   // store.dispatch(action);
  //   // store.dispatch(setCity(city))
  //   this.props.setCity(city);
  // }

  render() {
    const { classes, children, className, ...other } = this.props;
    // const { city }= this.state;
    return (
      <Grid fluid className="App-header">
        <Row>
        <AppBar position="sticky" className={classNames(classes.root, className)} {...other}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            {/* <LocationList */}
            <LocationListContainer
              cities={ cities }
              // onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
            {  /*{
                city &&
                <ForecastExtended city={ city } />
                <ForecastExtendedContainer
                  // city={ city } No es asi, para eso esta redux
                />
              }*/}
                <ForecastExtendedContainer />
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
  // setCity: PropTypes.func.isRequired,
};

// const mapDispatchToProps = (dispatch) => ({
// //name function:             dispatch(actionCreator())
//   setCity: (value) => dispatch(setCity(value)),
// });

//const AppConnected = connect(null,mapDispatchToProps)(App)

//export default withStyles(styles)(AppConnected);

// export default compose(
//   connect(null, mapDispatchToProps),
//   withStyles(styles)
// )(App)

export default withStyles(styles)(App);
