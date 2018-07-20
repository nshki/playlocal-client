import React from 'react';
import { connect } from 'react-redux';
import { showCopyModalOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import { Container, Label, Text } from './style';

class CopyModalOverlay extends React.Component {
  render() {
    const { currentUser, visible, text, onOverlayClick } = this.props;

    if (currentUser.username) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <Container>
          <Label>Discord Username</Label>
          <Text>{text}</Text>
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    visible: state.overlays.showCopyModalOverlay,
    text: state.overlays.copyModalText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOverlayClick: () => dispatch(showCopyModalOverlay(false)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyModalOverlay);
