import React from 'react';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import authContext from './authContext';
import { updateProfile } from '../../actions/currentUser';
import { showErrorModalOverlay } from '../../actions/overlays';
import Button from '../../components/Button';

const UPDATE_PROFILE = gql`
  mutation updateProfileMutation($username: String!, $avatarPlatform: String!) {
    updateProfile(username: $username, avatarPlatform: $avatarPlatform) {
      errors
    }
  }
`;

class UpdateProfileButton extends React.Component {
  state = { updated: false };

  render() {
    const {
      showErrorModalOverlay,
      updateProfileState,
      username,
      avatarPlatform,
    } = this.props;
    const { updated } = this.state;
    return (
      <Mutation
        mutation={UPDATE_PROFILE}
        context={authContext()}
        update={(cache, { data: { updateProfile } }) => {
          if (updateProfile.errors.length === 0) {
            updateProfileState(username, avatarPlatform);
            this.setState({ updated: true });
            setTimeout(() => this.setState({ updated: false }), 2000);
          } else {
            showErrorModalOverlay(updateProfile.errors.join());
          }
        }}
      >
        {(updateProfileMutation, { data }) => {
          return (
            <Button
              isAction={true}
              onClick={() => {
                updateProfileMutation({
                  variables: {
                    username,
                    avatarPlatform,
                  },
                });
              }}
            >
              {updated && 'Updated!'}
              {!updated && 'Update Profile'}
            </Button>
          );
        }}
      </Mutation>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    showErrorModalOverlay: (text) => {
      dispatch(showErrorModalOverlay(true, text));
    },
    updateProfileState: (username, avatarPlatform) => {
      dispatch(updateProfile(username, avatarPlatform));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateProfileButton);
