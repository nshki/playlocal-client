import React from 'react';
import { connect } from 'react-redux';
import SignInIcon from '../SignInIcon';
import { Container, Logo, AvatarButton, SignInButton } from './style';

class MenuBar extends React.Component {
  render() {
    const { currentUser } = this.props;
    const action = currentUser.username ? (
      <AvatarButton imageUrl={currentUser[`${currentUser.avatarPlatform}ImageUrl`]} />
    ) : (
      <SignInButton>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBar);
