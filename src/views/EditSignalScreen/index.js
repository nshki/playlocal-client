import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
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
  state = { geolocationEnabled: true, pickerOpen: false };

  render() {
    const {
      currentUser,
      published,
      lat,
      lng,
      message,
      endTime,
      updateSignal,
    } = this.props;
    const { geolocationEnabled, pickerOpen } = this.state;

    // Redirect user if they're not signed in.
    if (!currentUser.username) return <Redirect to="/" />;

    // Set default time. If the user is signed in and they have an active
    // signal, set the time to that.
    let defaultTime = new Date();
    defaultTime.setHours(defaultTime.getHours() + 1);
    if (published && endTime) defaultTime = new Date(endTime);

    // Check for geolocation permissions.
    if (!navigator || !navigator.permissions) {
      this.setState({ geolocationEnabled: false });
    } else {
      navigator.permissions && navigator.permissions.query({
        name: 'geolocation',
      }).then((status) => {
        if (status.state !== 'granted') {
          this.setState({ geolocationEnabled: false });
        }
      });
    }

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
            onChange={(e) => {
              updateSignal(
                published,
                e.target.value,
                endTime,
                lat,
                lng
              );
            }}
          />
        </FieldContainer>

        <FieldContainer>
          <FieldLabel>
            Available Until
            <ClockIcon />
          </FieldLabel>
          <DatetimeContainer>
            <Datetime
              defaultValue={defaultTime}
              inputProps={{ readOnly: true }}
              onFocus={() => this.setState({ pickerOpen: true })}
              onBlur={() => this.setState({ pickerOpen: false })}
              onChange={(dt) => {
                updateSignal(
                  published,
                  message,
                  dt.format(),
                  lat,
                  lng
                );
              }}
              isValidDate={(current) => {
                const yesterday = Datetime.moment().subtract(1, 'day');
                return current.isAfter(yesterday);
              }}
            />
          </DatetimeContainer>
        </FieldContainer>

        {!geolocationEnabled &&
          <FieldContainer>
            <FieldLabel>
              You must enable geolocation.
            </FieldLabel>
          </FieldContainer>
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const { geolocation, currentUser } = state;
  return {
    currentUser,
    published: currentUser.signalPublished,
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
