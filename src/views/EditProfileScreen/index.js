import React from 'react';
import { connect } from 'react-redux';
import Title from '../../components/Title';
import FieldContainer from '../../components/FieldContainer';
import FieldLabel from '../../components/FieldLabel';
import { Container, TextInput } from './style';

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    const { currentUser } = props;
    this.state = {
      username: currentUser.username,
    };
  }

  render() {
    const { username } = this.state;

    return (
      <Container>
        <Title>My Profile</Title>

        <FieldContainer>
          <FieldLabel>Username</FieldLabel>
          <TextInput
            defaultValue={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </FieldContainer>
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
