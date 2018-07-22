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
    const { onLoad, children } = this.props;

    return (
      <Query query={LOAD_QUERY} context={authContext()}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }

          if (error) {
            console.error(`There was an error`, error.message);
            return null;
          }

          onLoad(data);
          return children;
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (data) => dispatch(updateAppData(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadQuery);
