import React from 'react';
import { connect } from 'react-redux';
import { Container } from './style';

class SignalScreen extends React.Component {
  render() {
    return (
      <Container>
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
)(SignalScreen);
