import React from 'react';
import { connect } from 'react-redux';
import { updateCurrentLocation } from '../../actions/geolocation';
import { geolocated } from 'react-geolocated';

class GeolocatedWrapper extends React.Component {
  componentDidUpdate(prevProps) {
    const { coords, updateCurrentLocation } = this.props;
    updateCurrentLocation(coords);
  }

  render() {
    return this.props.children;
  }
}

const Geolocater = geolocated({
  positionOptions: {
    enableHighAccuracy: true,
  },
  watchPosition: true,
})(GeolocatedWrapper);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentLocation: (coords) => dispatch(updateCurrentLocation(coords)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Geolocater);
