import React from 'react';
import { connect } from 'react-redux';
import { showSignInOverlay } from '../../actions/overlays';
import Button from '../Button';
import { Container, Graphic, Headline, Text } from './style';
import illustration from './undraw_destination.png';

const Brochure = ({ onButtonClick }) => (
  <Container>
    <Headline>Find gamers around you.</Headline>
    <Graphic src={illustration} alt="" />
    <Text>
      Broadcast your location to gamers within a certain distance from you, and
      let them know what you're looking to play.
    </Text>
    <Text>
      Find other gamers around you, connect, and make new friends.
    </Text>
    <Text>
      Great for gamers on the go at airports or even for college campuses.
    </Text>
    <Text>
      <Button onClick={onButtonClick}>Get Started</Button>
    </Text>
  </Container>
);

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onButtonClick: () => dispatch(showSignInOverlay(true)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Brochure);
