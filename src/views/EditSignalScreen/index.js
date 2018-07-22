import React from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { updateSignal } from '../../actions/currentUser';
import MessageIcon from '../../components/MessageIcon';
import ClockIcon from '../../components/ClockIcon';
import {
  Container,
  Title,
  FieldContainer,
  FieldLabel,
  TextArea,
  DatetimeContainer,
} from './style';
import 'react-datetime/css/react-datetime.css';

class EditSignalScreen extends React.Component {
  state = { pickerOpen: false };

  render() {
    const { lat, lng, message, endTime, updateSignal } = this.props;
    const { pickerOpen } = this.state;

    return (
      <Container>
        <Title opaque={pickerOpen}>My Signal</Title>

        <FieldContainer opaque={pickerOpen}>
          <FieldLabel>
            Message
            <MessageIcon />
          </FieldLabel>
          <TextArea
            placeholder="Looking to play at..."
            defaultValue={message}
            onChange={(e) => updateSignal(e.target.value, endTime, lat, lng)}
          />
        </FieldContainer>

        <FieldContainer>
          <FieldLabel>
            Available Until
            <ClockIcon />
          </FieldLabel>
          <DatetimeContainer>
            <Datetime
              onFocus={() => this.setState({ pickerOpen: true })}
              onBlur={() => this.setState({ pickerOpen: false })}
              onChange={(dt) => updateSignal(message, dt.format(), lat, lng)}
              isValidDate={(current) => {
                const yesterday = Datetime.moment().subtract(1, 'day');
                return current.isAfter(yesterday);
              }}
            />
          </DatetimeContainer>
        </FieldContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { geolocation, currentUser } = state;
  return {
    lat: geolocation.lat,
    lng: geolocation.lng,
    message: currentUser.signalMessage,
    endTime: currentUser.signalEndTime,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSignal: (message, endTime, lat, lng) => {
      dispatch(updateSignal(message, endTime, lat, lng));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSignalScreen);
