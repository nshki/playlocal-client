import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const { location, currentUser, signals, geolocation } = this.props;
    const short = location.pathname.indexOf('/signal') > -1;
    return (
      <Map
        short={short}
        currentUser={currentUser}
        signals={signals}
        geolocation={geolocation}
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
