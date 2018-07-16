import React from 'react';
import { connect } from 'react-redux';
import ListIcon from '../ListIcon';
import { Container, IconLink, PublishToggle } from './style';

class ControlBar extends React.Component {
  render() {
    const { currentUser, signalPublished } = this.props;

    if (!currentUser.username) return null;

    return (
      <Container>
        <IconLink>
          <ListIcon />
        </IconLink>

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
