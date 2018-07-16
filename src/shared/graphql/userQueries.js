import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import authContext from './authContext';

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

export default class CurrentUserQuery extends React.Component {
  render() {
    // Currently using React Router's location search prop, so this component
    // must be passed as a Route component.
    const context = authContext(this.props.location.search.replace('?', ''));

    return (
      <Query query={CURRENT_USER_QUERY} context={context}>
        {({ loading, error, data }) => {
          console.log(data);
          return null;
        }}
      </Query>
    );
  }
}
