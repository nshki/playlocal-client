import React from 'react';
import { connect } from 'react-redux';
import Map from '../../components/Map';

class MapScreen extends React.Component {
  render() {
    const { currentUser, signals } = this.props;
    return (
      <Map currentUser={currentUser} signals={signals} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    signals: state.signals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapScreen);
