import React from 'react';
import { Container } from './style';

class Button extends React.Component {
  render() {
    const { onClick, children } = this.props;
    return (
      <Container onClick={onClick}>
        {children}
      </Container>
    );
  }
}

export default Button;
