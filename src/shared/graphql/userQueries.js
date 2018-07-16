import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import authContext from './authContext';
import { connect } from 'react-redux';
import { updateCurrentUser } from '../../actions/currentUser';

export const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    currentUser {
      username
      avatarPlatform
      identities {
        provider
        uid
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
  }
`;

class CurrentUserQuery extends React.Component {
  render() {
    const { onUserLoad } = this.props;

    // Currently using React Router's location search prop, so this component
    // must be passed as a Route component.
    const context = authContext(this.props.location.search.replace('?', ''));

    return (
      <Query query={CURRENT_USER_QUERY} context={context}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }

          if (error) {
            console.error(`There was an error`, error.message);
            return null;
          }

          onUserLoad(data);
          return null;
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
    onUserLoad: (data) => {
      dispatch(updateCurrentUser(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUserQuery);
