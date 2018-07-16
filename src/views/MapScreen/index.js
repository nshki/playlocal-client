import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import qs from 'qs';
import { setInStorage } from '../../helpers/localStorage';
import MenuBar from '../../components/MenuBar';
import Map from '../../components/Map';

const CURRENT_USER_QUERY = gql`
  query MapScreenQuery {
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

class MapScreen extends React.Component {
  render() {
    const params = qs.parse(this.props.location.search.replace('?', ''));
    if (params.token) setInStorage('token', params.token);
    const context = {
      headers: {
        authorization: params.token ? `Bearer ${params.token}` : '',
      },
    };

    return (
      <Query query={CURRENT_USER_QUERY} context={context}>
        {({ loading, error, data }) => {
          console.log(data);
          return (
            <React.Fragment>
              <MenuBar />
              <Map />
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default MapScreen;
