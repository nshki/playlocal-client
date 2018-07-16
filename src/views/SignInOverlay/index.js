import React from 'react';
import { connect } from 'react-redux';
import Overlay from '../../components/Overlay';
import IconButton from '../../components/IconButton';
import { ButtonWrapper } from './style';

class SignInOverlay extends React.Component {
  render() {
    const { currentUser } = this.props;

    if (currentUser.username) {
      return null;
    }

    return (
      <Overlay visible={true}>
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
  return { currentUser: state.currentUser };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInOverlay);
