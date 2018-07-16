import React from 'react';
import { connect } from 'react-redux';
import { showMenuOverlay } from '../../actions/overlays';
import Overlay from '../../components/Overlay';
import { Container, Action } from './style';

class MenuOverlay extends React.Component {
  render() {
    const { currentUser, visible, onOverlayClick } = this.props;

    if (!currentUser) {
      return null;
    }

    return (
      <Overlay onOverlayClick={onOverlayClick} visible={visible}>
        <Container>
          <Action>Sign out</Action>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuOverlay);
