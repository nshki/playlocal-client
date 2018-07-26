import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import {
  timeFromNow,
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
    const { signals, preferences } = this.props;

    // Only show signals in search radius.
    const matchingSignals = signals.filter((signal) => {
      return signal.distance < preferences.searchRadius;
    });

    if (matchingSignals.length > 0) {
      return matchingSignals.map((signal, i) => (
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
    } else {
      return (
        <Card>
          <CardBody>
            <CardBodyMessage>
              No one is available within this search radius. :'( Try expanding
              your search?
            </CardBodyMessage>
          </CardBody>
        </Card>
      );
    }
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
    signals: state.signals,
    currentUser: state.currentUser,
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
