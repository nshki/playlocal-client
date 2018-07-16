import React from 'react';
import { connect } from 'react-redux';
import { showSignInOverlay, showMenuOverlay } from '../../actions/overlays';
import { getAvatarForUser } from '../../helpers/users';
import SignInIcon from '../SignInIcon';
import { Container, Logo, AvatarButton, SignInButton } from './style';

class MenuBar extends React.Component {
  render() {
    const { currentUser, onSignInClick, onAvatarClick } = this.props;
    const action = currentUser.username ? (
      <AvatarButton
        imageUrl={getAvatarForUser(currentUser)}
        onClick={onAvatarClick}
      />
    ) : (
      <SignInButton onClick={onSignInClick}>
        <SignInIcon />
      </SignInButton>
    );

    return (
      <Container>
        <Logo>Kacha</Logo>
        {action}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick: () => dispatch(showSignInOverlay(true)),
    onAvatarClick: () => dispatch(showMenuOverlay(true)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBar);
