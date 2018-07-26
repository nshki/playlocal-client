import React from 'react';
import { Container, RouteContainer } from './style';

class Button extends React.Component {
  render() {
    const {
      onClick,
      isAction,
      children,
      to,
      disabled,
    } = this.props;

    if (to) {
      return (
        <RouteContainer to={to}>
          {children}
        </RouteContainer>
      );
    } else {
      return (
        <Container onClick={onClick} isAction={isAction} disabled={disabled}>
          {children}
        </Container>
      );
    }
  }
}

export default Button;
