import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const { currentUser, signals, geolocation } = this.props;
    return (
      <Map
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
