import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  timeFromNow,
  distanceBetween,
  twitterButton,
  discordButton,
} from '../../helpers/signals';
import ClockIcon from '../../components/ClockIcon';
import PinIcon from '../../components/PinIcon';
import {
  Container,
  Card,
  CardHeader,
  CardAvatar,
  CardUsername,
  CardMeta,
  CardMetaText,
  CardBody,
  CardBodyMessage,
  CardBodyActions,
} from './style';

class ListScreen extends React.Component {
  renderCards = () => {
    const { signals, geolocation, preferences } = this.props;

    // Calculate distance from each signal.
    let sortedSignals = signals.map((signal) => {
      return { ...signal, distance: distanceBetween(signal, geolocation) };
    });

    // Sort signals by distance.
    sortedSignals.sort((a, b) => {
      return a.distance - b.distance;
    });

    // Filter out distances that don't fit within search radius.
    sortedSignals = sortedSignals.filter((signal) => {
      return signal.distance <= preferences.searchRadius;
    });

    return sortedSignals.map((signal, i) => (
      <Card key={`card-${i}`}>
        <CardHeader>
          <CardAvatar imageUrl={signal.imageUrl} />
          <CardMeta>
            <CardUsername>{signal.username}</CardUsername>
            <CardMetaText>
              <ClockIcon />
              Available for {timeFromNow(signal.endTime)}
            </CardMetaText>
            <CardMetaText>
              <PinIcon />
              {signal.distance} mi
            </CardMetaText>
          </CardMeta>
        </CardHeader>

        <CardBody>
          <CardBodyMessage>{signal.message}</CardBodyMessage>
          <CardBodyActions>
            {twitterButton(signal)}
            {discordButton(signal)}
          </CardBodyActions>
        </CardBody>
      </Card>
    ));
  };

  render() {
    const { currentUser } = this.props;
    if (!currentUser.username) return <Redirect to="/" />;

    return (
      <Container>
        {this.renderCards()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    signals: state.signals,
    geolocation: state.geolocation,
    preferences: state.preferences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
