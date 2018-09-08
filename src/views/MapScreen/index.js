import React from 'react';
import { connect } from 'react-redux';
import Brochure from '../../components/Brochure';
import Map from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const {
      location,
      currentUser,
      signals,
      geolocation,
      preferences,
    } = this.props;
    const short = location.pathname.indexOf('/signal') > -1;

    // Set a center coordinate.
    let lat = null;
    let lng = null;
    let interpolate = false;
    if (location.pathname.indexOf('/signal/') === 0) {
      // Center on user signal.
      const username = decodeURI(window.location.href.split('/signal/')[1]);
      const signal = signals.find((s) => s.username === username);
      if (signal) {
        lat = signal.lat;
        lng = signal.lng;
        interpolate = true;
      }
    } else if (location.pathname.indexOf('/signal') === 0) {
      // Center on selected signal.
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

    // Only show signals in search radius.
    const matchingSignals = signals.filter((signal) => {
      return signal.distance < preferences.searchRadius;
    });

    return (
      <React.Fragment>
        {!currentUser.username && <Brochure />}
        <Map
          short={short}
          currentUser={currentUser}
          signals={matchingSignals}
          geolocation={geolocation}
          lat={lat}
          lng={lng}
          interpolate={interpolate}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    signals: state.signals,
    geolocation: state.geolocation,
    preferences: state.preferences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
