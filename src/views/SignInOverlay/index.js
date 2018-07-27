import React from 'react';
import { connect } from 'react-redux';
import { showSignInOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import IconButton from '../../components/IconButton';
import { Container } from './style';

class SignInOverlay extends React.Component {
  onTwitterClick = (e) => {
    e.stopPropagation();
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/twitter`;
  };

  onDiscordClick = (e) => {
    e.stopPropagation();
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/discord`;
  };

  render() {
    const { currentUser, visible, onOverlayClick } = this.props;

    if (currentUser.username) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <Container>
          <IconButton onClick={this.onTwitterClick} type="twitter" tall>
            Sign in with Twitter
          </IconButton>
          <IconButton onClick={this.onDiscordClick} type="discord" tall>
            Sign in with Discord
          </IconButton>
        </Container>
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
