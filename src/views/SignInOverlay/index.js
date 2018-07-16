import React from 'react';
import { connect } from 'react-redux';
import { showSignInOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import IconButton from '../../components/IconButton';
import { ButtonWrapper } from './style';

class SignInOverlay extends React.Component {
  render() {
    const { currentUser, visible, onOverlayClick } = this.props;

    if (currentUser.username) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <ButtonWrapper>
          <IconButton type="twitter" tall>Sign in with Twitter</IconButton>
        </ButtonWrapper>

        <ButtonWrapper>
          <IconButton type="discord" tall>Sign in with Discord</IconButton>
        </ButtonWrapper>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    visible: state.overlays.showSignInOverlay,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOverlayClick: () => dispatch(showSignInOverlay(false)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInOverlay);
