import React from 'react';
import { connect } from 'react-redux';
import ClockIcon from '../../components/ClockIcon';
import PinIcon from '../../components/PinIcon';
import IconButton from '../../components/IconButton';
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
    const { signals } = this.props;

    return signals.all.map((signal, i) => (
      <Card key={`card-${i}`}>
        <CardHeader>
          <CardAvatar imageUrl={signal.imageUrl} />
          <CardMeta>
            <CardUsername>{signal.username}</CardUsername>
            <CardMetaText>
              <ClockIcon />
              Available for 1 hr 13 min
            </CardMetaText>
            <CardMetaText>
              <PinIcon />
              0.1 mi
            </CardMetaText>
          </CardMeta>
        </CardHeader>

        <CardBody>
          <CardBodyMessage>{signal.message}</CardBodyMessage>
          <CardBodyActions>
            <IconButton type="twitter">Contact via Twitter</IconButton>
            <IconButton type="discord">Contact via Discord</IconButton>
          </CardBodyActions>
        </CardBody>
      </Card>
    ));
  };

  render() {
    return (
      <Container>
        {this.renderCards()}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { signals: state.signals };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
