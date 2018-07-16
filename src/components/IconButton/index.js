import React from 'react';
import CaretIcon from '../CaretIcon';
import DiscordIcon from '../DiscordIcon';
import TwitterIcon from '../TwitterIcon';
import { Container, IconWrapper, Text } from './style';

class IconButton extends React.Component {
  render() {
    const { onClick, type, tall, children } = this.props;
    const icon = type === 'discord' ? <DiscordIcon /> : <TwitterIcon />;

    return (
      <Container type={type} tall={tall} onClick={onClick}>
        <IconWrapper tall={tall}>{icon}</IconWrapper>
        <Text>{children}</Text>
        <CaretIcon />
      </Container>
    );
  }
}

export default IconButton;
