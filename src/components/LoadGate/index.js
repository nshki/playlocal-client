import React from 'react';
import { connect } from 'react-redux';
import { Container, LoadingIcon, Fader } from './style';

class LoadGate extends React.Component {
  render() {
    const { app, children } = this.props;
    if (app.loaded) {
      return (
        <Fader>
          {children}
        </Fader>
      );
    } else {
      return (
        <Container>
          <LoadingIcon />
        </Container>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadGate);
