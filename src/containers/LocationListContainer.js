import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  //conectar react y redux
// import { setCity } from '../actions';
import { setSelectedCity } from '../actions';
import LocationList from '../components/LocationList';


class LocationListContainer extends Component {

  handleSelectedLocation = (city) => {
    console.log(`${city} - handleSelectedLocation`);
    this.props.setSelectedCity(city);
  }

  render(){
    const { cities } = this.props;
    return (
      <LocationList
        cities={ cities }
        onSelectedLocation={this.handleSelectedLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCity: (value) => dispatch(setSelectedCity(value)),
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
