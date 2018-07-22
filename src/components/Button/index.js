import React from 'react';
import { Container } from './style';

class Button extends React.Component {
  render() {
    const { onClick, isAction, children } = this.props;
    return (
      <Container onClick={onClick} isAction={isAction}>
        {children}
      </Container>
    );
  }
}

export default Button;
