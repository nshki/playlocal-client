import React from 'react';
import { connect } from 'react-redux';
import { clearCurrentUser } from '../../actions/currentUser';
import { showMenuOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import Button from '../../components/Button';
import { Container } from './style';

class MenuOverlay extends React.Component {
  onContributeClick = () => {
    window.open('https://github.com/nshki/playlocal-client', '_blank');
  };

  render() {
    const { currentUser, visible, onOverlayClick, onSignOutClick } = this.props;

    if (!currentUser) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <Container>
          <Button to="/profile">Edit Profile</Button>
          <Button onClick={onSignOutClick}>Sign out</Button>
          <Button onClick={this.onContributeClick}>Contribute</Button>
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    visible: state.overlays.showMenuOverlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOverlayClick: () => dispatch(showMenuOverlay(false)),
    onSignOutClick: () => dispatch(clearCurrentUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuOverlay);
