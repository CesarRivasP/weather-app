import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer'
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


class App extends Component {

  render() {
    const { classes, children, className, ...other } = this.props;
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
            <LocationListContainer
              cities={ cities }
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
};

export default withStyles(styles)(App);
