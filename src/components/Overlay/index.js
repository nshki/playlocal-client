import React from 'react';
import { Container } from './style';

class Overlay extends React.Component {
  render() {
    const { visible, children } = this.props;
    return (
      <Container visible={visible}>
        {children}
      </Container>
    );
  }
}

export default Overlay;
