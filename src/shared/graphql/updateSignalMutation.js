import React from 'react';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import authContext from './authContext';
import { updateSignal } from '../../actions/currentUser';
import { showErrorModalOverlay } from '../../actions/overlays';
import Button from '../../components/Button';

const UPDATE_SIGNAL = gql`
  mutation updateSignalMutation($message: String!, $endTime: String!, $lat: Float!, $lng: Float!, $published: Boolean!) {
    updateSignal(message: $message, endTime: $endTime, lat: $lat, lng: $lng, published: $published) {
      errors
    }
  }
`;

class UpdateSignalButton extends React.Component {
  render() {
    const {
      showErrorModalOverlay,
      updateSignalState,
      published,
      message,
      endTime,
      signalLat,
      signalLng,
      lat,
      lng,
    } = this.props;
    const buttonText = published ? 'Unpublish' : 'Publish';
    return (
      <Mutation
        mutation={UPDATE_SIGNAL}
        context={authContext()}
        update={(cache, { data: { updateSignal } }) => {
          if (updateSignal.errors.length === 0) {
            updateSignalState(
              !published,
              message,
              endTime,
              signalLat,
              signalLng,
            );
          } else {
            showErrorModalOverlay(updateSignal.errors.join());
          }
        }}
      >
        {(updateSignalMutation, { data }) => {

          return (
            <Button
              isAction={!published}
              onClick={() => {
                updateSignalMutation({
                  variables: {
                    message,
                    endTime,
                    lat,
                    lng,
                    published: !published,
                  },
                });
              }}
            >
              {buttonText}
            </Button>
          );
        }}
      </Mutation>
    );
  }
}

const mapStateToProps = (state) => {
  const { geolocation, currentUser } = state;
  return {
    published: currentUser.signalPublished,
    message: currentUser.signalMessage,
    endTime: currentUser.signalEndTime,
    signalLat: currentUser.lat,
    signalLng: currentUser.lng,
    lat: geolocation.lat,
    lng: geolocation.lng,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showErrorModalOverlay: (text) => {
      dispatch(showErrorModalOverlay(true, text));
    },
    updateSignalState: (published, message, endTime, lat, lng) => {
      dispatch(updateSignal(published, message, endTime, lat, lng));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateSignalButton);
