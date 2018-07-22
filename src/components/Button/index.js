import React from 'react';
import { Container } from './style';

class Button extends React.Component {
  render() {
    const { onClick, action, children } = this.props;
    return (
      <Container onClick={onClick} action={action}>
        {children}
      </Container>
    );
  }
}

export default Button;
