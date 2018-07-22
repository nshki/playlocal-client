import React from 'react';
import { connect } from 'react-redux';
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
  Meta,
  Avatar,
  MetaContent,
  Username,
  MetaText,
  MetaTextIcon,
  Message,
  Actions,
} from './style';

class SignalScreen extends React.Component {
  render() {
    const { geolocation, signals } = this.props;
    const username = decodeURI(window.location.href.split('/signal/')[1]);
    const signal = signals.find((s) => s.username === username);

    if (signal) {
      return (
        <Container>
          <Meta>
            <Avatar imageUrl={signal.imageUrl} />
            <MetaContent>
              <Username>{signal.username}</Username>
              <MetaText>
                <MetaTextIcon>
                  <ClockIcon />
                </MetaTextIcon>
                Available for {timeFromNow(signal.endTime)}
              </MetaText>
              <MetaText>
                <MetaTextIcon>
                  <PinIcon />
                </MetaTextIcon>
                {distanceBetween(signal, geolocation)} mi
              </MetaText>
            </MetaContent>
          </Meta>

          <Message>{signal.message}</Message>

          <Actions>
            {twitterButton(signal)}
            {discordButton(signal)}
          </Actions>
        </Container>
      );
    } else {
      return (
        <Container>
          <Meta>
            <MetaContent>
              <Username>{username}</Username>
            </MetaContent>
          </Meta>

          <Message>
            User does not have an active signal. Try exploring nearby?
          </Message>
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    signals: state.signals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignalScreen);
