import React, {Component} from 'react';
import ForecastExtended from '../components/ForecastExtended'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {

  render() {
    const { city } = this.props;

    return (
      city &&
        <ForecastExtended city={city}/>
    )
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired
}

// const mapStateToProps = (state) => ({ city: state.city });
const mapStateToProps = ({city}) => ({city}); //Simplificado mediante destructuring
//toma la propiedad city que esta dentro de state, luego se asigna -- city = city  === city

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
