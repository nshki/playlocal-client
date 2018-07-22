import React from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import MessageIcon from '../../components/MessageIcon';
import ClockIcon from '../../components/ClockIcon';
import {
  Container,
  Title,
  FieldContainer,
  FieldLabel,
  TextArea,
  DatetimeContainer,
} from './style';
import 'react-datetime/css/react-datetime.css';

class EditSignalScreen extends React.Component {
  state = { pickerOpen: false };

  render() {
    const { pickerOpen } = this.state;

    return (
      <Container>
        <Title opaque={pickerOpen}>My Signal</Title>

        <FieldContainer opaque={pickerOpen}>
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
          <DatetimeContainer>
            <Datetime
              onFocus={() => this.setState({ pickerOpen: true })}
              onBlur={() => this.setState({ pickerOpen: false })}
              isValidDate={(current) => {
                const yesterday = Datetime.moment().subtract(1, 'day');
                return current.isAfter(yesterday);
              }}
            />
          </DatetimeContainer>
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
