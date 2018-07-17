import React from 'react';
import { connect } from 'react-redux';
import ListIcon from '../ListIcon';
import MapIcon from '../MapIcon';
import { Container, IconLink, PublishToggle } from './style';

class ControlBar extends React.Component {
  render() {
    const { currentUser, signalPublished, location } = this.props;

    if (!currentUser.username) return null;
    const viewToggle = location.pathname === '/list' ?
      (
        <IconLink to="/">
          <MapIcon />
        </IconLink>
      ) : (
        <IconLink to="/list">
          <ListIcon />
        </IconLink>
      );

    return (
      <Container>
        {viewToggle}
        <PublishToggle published={signalPublished} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const signalPublished = state.currentUser ?
    state.currentUser.signalPublished :
    false;

  return {
    currentUser: state.currentUser,
    signalPublished,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlBar);
