import React from 'react';
import { Container } from './style';

class Overlay extends React.Component {
  render() {
    const { visible, onOverlayClick, children } = this.props;
    return (
      <Container visible={visible} onClick={onOverlayClick}>
        {children}
      </Container>
    );
  }
}

export default Overlay;
