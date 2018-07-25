import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { getFromStorage } from '../../helpers/localStorage';
import UpdateProfileButton from '../../shared/graphql/updateProfileMutation';
import Title from '../../components/Title';
import FieldContainer from '../../components/FieldContainer';
import FieldLabel from '../../components/FieldLabel';
import IconButton from '../../components/IconButton';
import {
  Container,
  Section,
  TextInput,
  RadioGroup,
  RadioButton,
  RadioButtonText,
} from './style';

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser: { username, avatarPlatform } } = this.props;
    this.state = { username, avatarPlatform };
  }

  handleUsernameChange = (e) => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  handlePlatformChange = (e) => {
    this.setState({ avatarPlatform: e.target.value });
  };

  handleTwitterClick = () => {
    const { currentUser: { twitterUsername } } = this.props;
    const token = getFromStorage('token');
    if (!twitterUsername && token) {
      window.location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/twitter?token=${token}`;
    }
  };

  handleDiscordClick = () => {
    const { currentUser: { discordUsername } } = this.props;
    const token = getFromStorage('token');
    if (!discordUsername && token) {
      window.location.href = `${process.env.REACT_APP_API_BASE_URL}/auth/discord?token=${token}`;
    }
  };

  render() {
    const {
      currentUser,
      currentUser: {
        twitterUsername,
        discordUsername,
      },
    } = this.props;
    const { username, avatarPlatform } = this.state;

    // Redirect user if they're not signed in.
    if (!currentUser.username) return <Redirect to="/" />;

    return (
      <Container>
        <Section>
          <Title>My Profile</Title>

          <FieldContainer>
            <FieldLabel>Username</FieldLabel>
            <TextInput
              defaultValue={username}
              placeholder=":("
              onChange={this.handleUsernameChange}
            />
          </FieldContainer>

          {twitterUsername && discordUsername &&
            <FieldContainer>
              <FieldLabel>Avatar Source</FieldLabel>
              <RadioGroup>
                <RadioButton>
                  <input
                    type="radio"
                    name="avatar-source"
                    value="twitter"
                    defaultChecked={'twitter' === avatarPlatform}
                    onChange={this.handlePlatformChange}
                  />
                  <RadioButtonText>Twitter</RadioButtonText>
                </RadioButton>
                <RadioButton>
                  <input
                    type="radio"
                    name="avatar-source"
                    value="discord"
                    defaultChecked={'discord' === avatarPlatform}
                    onChange={this.handlePlatformChange}
                  />
                  <RadioButtonText>Discord</RadioButtonText>
                </RadioButton>
              </RadioGroup>
            </FieldContainer>
          }

          <FieldContainer>
            <UpdateProfileButton
              username={username}
              avatarPlatform={avatarPlatform}
            />
          </FieldContainer>
        </Section>

        <Section>
          <Title>Connected Accounts</Title>

          <FieldContainer>
            <IconButton onClick={this.handleTwitterClick} type="twitter" tall>
              {twitterUsername && `Disconnect from ${twitterUsername}`}
              {!twitterUsername && 'Connect Twitter account'}
            </IconButton>
          </FieldContainer>

          <FieldContainer>
            <IconButton onClick={this.handleDiscordClick} type="discord" tall>
              {discordUsername && `Disconnect from ${discordUsername}`}
              {!discordUsername && 'Connect Discord account'}
            </IconButton>
          </FieldContainer>
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileScreen);
