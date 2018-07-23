import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const { location, currentUser, signals, geolocation } = this.props;
    const short = location.pathname.indexOf('/signal') > -1;

    // Set a center coordinate.
    let lat = null;
    let lng = null;
    let interpolate = false;
    if (location.pathname.indexOf('/signal/') === 0) {
      const username = decodeURI(window.location.href.split('/signal/')[1]);
      const signal = signals.find((s) => s.username === username);
      if (signal) {
        lat = signal.lat;
        lng = signal.lng;
        interpolate = true;
      }
    } else if (location.pathname.indexOf('/signal') === 0) {
      if (
        currentUser.signalPublished &&
        currentUser.signalLat &&
        currentUser.signalLng
      ) {
        lat = currentUser.signalLat;
        lng = currentUser.signalLng;
        interpolate = true;
      } else if (geolocation.lat && geolocation.lng) {
        lat = geolocation.lat;
        lng = geolocation.lng;
        interpolate = true;
      }
    }

    return (
      <Map
        short={short}
        currentUser={currentUser}
        signals={signals}
        geolocation={geolocation}
        lat={lat}
        lng={lng}
        interpolate={interpolate}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    signals: state.signals,
    geolocation: state.geolocation,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
