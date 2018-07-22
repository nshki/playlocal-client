import React from 'react';
import { connect } from 'react-redux';
import { showCopyModalOverlay } from '../../actions/overlays';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Overlay from '../../components/Overlay';
import Button from '../../components/Button';
import { Container, Label, Text, ButtonContainer } from './style';

class CopyModalOverlay extends React.Component {
  state = { copied: false };

  onContainerClick = (e) => {
    e.stopPropagation();
  };

  onCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

  render() {
    const { currentUser, visible, text, onOverlayClick } = this.props;
    const { copied } = this.state;

    if (!currentUser.username) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <Container onClick={this.onContainerClick}>
          <Label>Discord Username</Label>
          <Text>{text}</Text>
          <ButtonContainer>
            <CopyToClipboard text={text} onCopy={this.onCopy}>
              <Button>
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </CopyToClipboard>
          </ButtonContainer>
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
