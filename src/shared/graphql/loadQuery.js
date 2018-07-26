import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import authContext from './authContext';
import { connect } from 'react-redux';
import { updateAppData } from '../../actions/appLoad';

export const LOAD_QUERY = gql`
  query LoadQuery {
    currentUser {
      username
      avatarPlatform
      identities {
        provider
        username
        imageUrl
      }
      playSignal {
        message
        endTime
        lat
        lng
        published
      }
    }

    activeSignals {
      message
      endTime
      lat
      lng
      user {
        username
        avatarPlatform
        identities {
          provider
          username
          imageUrl
        }
      }
    }
  }
`;

class LoadQuery extends React.Component {
  render() {
    const {
      onLoad,
      geolocation,
      preferences,
      currentUser,
    } = this.props;

    return (
      <Query
        query={LOAD_QUERY}
        context={authContext()}
        pollInterval={10000}
      >
        {({ loading, error, data }) => {
          if (loading || error) {
            if (error) console.error(error.message);
            return null;
          }

          setTimeout(() => {
            onLoad(data, geolocation, preferences, currentUser.username);
          }, 0);
          return null;
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    geolocation: state.geolocation,
    preferences: state.preferences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (data, geolocation, preferences, username) => {
      dispatch(updateAppData(data, geolocation, preferences, username));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadQuery);
