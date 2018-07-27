import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Datetime from 'react-datetime';
import moment from 'moment';
import { updateSignal } from '../../actions/currentUser';
import Title from '../../components/Title';
import FieldContainer from '../../components/FieldContainer';
import FieldLabel from '../../components/FieldLabel';
import MessageIcon from '../../components/MessageIcon';
import ClockIcon from '../../components/ClockIcon';
import { Container, TextArea, DatetimeContainer } from './style';
import 'react-datetime/css/react-datetime.css';

class EditSignalScreen extends React.Component {
  state = { geolocationEnabled: false, pickerOpen: false };

  componentDidMount() {
    const { geolocationEnabled } = this.state;

    // Check for geolocation permissions.
    if (navigator && navigator.permissions && !geolocationEnabled) {
      navigator.permissions.query({ name: 'geolocation' }).then((status) => {
        if (status.state === 'granted') {
          setTimeout(() => this.setState({ geolocationEnabled: true }), 0);
        }
      });
    }
  }

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
    const defaultTime = (published && endTime) ?
      moment(endTime) :
      moment().startOf('hour').add(1, 'hour');

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
              timeConstraints={{ hours: { step: 1 }, minutes: { step: 5 } }}
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
    updateSignal: (published, message, endTime, lat, lng) => {
      dispatch(updateSignal(published, message, endTime, lat, lng));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSignalScreen);
