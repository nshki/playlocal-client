import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
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
    const { currentUser } = props;
    this.state = {
      username: currentUser.username,
      avatarPlatform: currentUser.avatarPlatform,
    };
  }

  handlePlatformChange = (e) => {
    this.setState({ avatarPlatform: e.target.value });
  };

  render() {
    const { currentUser: { twitterUsername, discordUsername } } = this.props;
    const { username, avatarPlatform } = this.state;

    return (
      <Container>
        <Section>
          <Title>My Profile</Title>

          <FieldContainer>
            <FieldLabel>Username</FieldLabel>
            <TextInput
              defaultValue={username}
              placeholder=":("
              onChange={(e) => this.setState({ username: e.target.value })}
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
            <Button isAction={true}>Update Profile</Button>
          </FieldContainer>
        </Section>

        <Section>
          <Title>Connected Accounts</Title>

          <FieldContainer>
            <IconButton type="twitter" tall>
              {twitterUsername && `Disconnect from ${twitterUsername}`}
              {!twitterUsername && 'Connect Twitter account'}
            </IconButton>
          </FieldContainer>

          <FieldContainer>
            <IconButton type="discord" tall>
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
