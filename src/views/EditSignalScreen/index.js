import React from 'react';
import { connect } from 'react-redux';
import MessageIcon from '../../components/MessageIcon';
import ClockIcon from '../../components/ClockIcon';
import {
  Container,
  Title,
  FieldContainer,
  FieldLabel,
  TextArea,
} from './style';

class EditSignalScreen extends React.Component {
  render() {
    return (
      <Container>
        <Title>My Signal</Title>

        <FieldContainer>
          <FieldLabel>
            Message
            <MessageIcon />
          </FieldLabel>
          <TextArea
            placeholder="Looking to play at..."
          />
        </FieldContainer>

        <FieldContainer>
          <FieldLabel>
            Available Until
            <ClockIcon />
          </FieldLabel>
        </FieldContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSignalScreen);
