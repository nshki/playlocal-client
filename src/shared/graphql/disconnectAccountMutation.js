import React from 'react';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import authContext from './authContext';
import { clearCurrentUser, updateIdentities } from '../../actions/currentUser';
import { showErrorModalOverlay } from '../../actions/overlays';
import IconButton from '../../components/IconButton';

const DISCONNECT_ACCOUNT = gql`
  mutation disconnectAccountMutation($provider: String!) {
    disconnectAccount(provider: $provider) {
      userDeleted
      avatarPlatform
      errors
    }
  }
`;

class DisconnectAccountButton extends React.Component {
  render() {
    const {
      type,
      username,
      showErrorModalOverlay,
      updateIdentities,
      clearCurrentUser,
      currentUser,
    } = this.props;
    return (
      <Mutation
        mutation={DISCONNECT_ACCOUNT}
        context={authContext()}
        update={(cache, { data: { disconnectAccount } }) => {
          if (disconnectAccount.errors.length > 0) {
            // There was an error.
            showErrorModalOverlay(disconnectAccount.errors.join());
          } else if (disconnectAccount.avatarPlatform) {
            // One account was succesfully disconnected. Update store to
            // reflect this change.
            const { avatarPlatform } = disconnectAccount;
            let identityParams = {
              twitterUsername: currentUser.twitterUsername,
              twitterImageUrl: currentUser.twitterImageUrl,
              discordUsername: currentUser.discordUsername,
              discordImageUrl: currentUser.discordImageUrl,
            };

            // The returned avatarPlatform value tells us which identity to
            // keep information for. Null out the other.
            if (avatarPlatform === 'twitter') {
              identityParams.discordUsername = null;
              identityParams.discordImageUrl = null;
            } else {
              identityParams.twitterUsername = null;
              identityParams.twitterImageUrl = null;
            }

            // Update the store.
            updateIdentities(
              avatarPlatform,
              identityParams.twitterUsername,
              identityParams.twitterImageUrl,
              identityParams.discordUsername,
              identityParams.discordImageUrl
            );
          } else if (disconnectAccount.userDeleted) {
            // User disconnected all accounts. Log out.
            clearCurrentUser();
          }
        }}
      >
        {(disconnectAccountMutation, { data }) => {
          return (
            <IconButton
              tall
              type={type}
              onClick={() => {
                disconnectAccountMutation({
                  variables: {
                    provider: type,
                  },
                });
              }}
            >
              Disconnect from {username}
            </IconButton>
          );
        }}
      </Mutation>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showErrorModalOverlay: (text) => {
      dispatch(showErrorModalOverlay(true, text));
    },
    updateIdentities: (avatarPlatform, twitterUsername, twitterImageUrl, discordUsername, discordImageUrl) => {
      dispatch(
        updateIdentities(
          avatarPlatform,
          twitterUsername,
          twitterImageUrl,
          discordUsername,
          discordImageUrl
        )
      );
    },
    clearCurrentUser: () => dispatch(clearCurrentUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisconnectAccountButton);
