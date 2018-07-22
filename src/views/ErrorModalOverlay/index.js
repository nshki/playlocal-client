import React from 'react';
import { connect } from 'react-redux';
import { showErrorModalOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import Button from '../../components/Button';
import { Container, Label, Text, ButtonContainer } from './style';

class ErrorModalOverlay extends React.Component {
  onContainerClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { visible, text, close } = this.props;
    return (
      <Overlay onOverlayClick={close} visible={visible}>
        <Container onClick={this.onContainerClick}>
          <Label>Error</Label>
          <Text>{text}</Text>
          <ButtonContainer>
            <Button onClick={close}>
              Okay
            </Button>
          </ButtonContainer>
        </Container>
      </Overlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.overlays.showErrorModalOverlay,
    text: state.overlays.errorModalText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => dispatch(showErrorModalOverlay(false)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorModalOverlay);
