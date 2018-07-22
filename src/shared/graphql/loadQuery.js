import React from 'react';
import styled, { keyframes } from 'styled-components';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import authContext from './authContext';
import { connect } from 'react-redux';
import { updateAppData } from '../../actions/appLoad';

export const LOAD_QUERY = gql`
  query LoadQuery {
    currentUser {
      username
      avatarPlatform
      identities {
        provider
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

    activeSignals {
      message
      endTime
      lat
      lng
      user {
        username
        avatarPlatform
        identities {
          provider
          username
          imageUrl
        }
      }
    }
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
    opacity: 1;
  }

  to {
    transform: scale3d(3, 3, 1);
    opacity: 0;
  }
`;

const LoadingIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;

  &:after {
    content: '';
    background-color: #ff8a00;
    width: 100%;
    height: 100%;
    display: block;
    border: 3px solid #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  &:before {
    content: '';
    background-color: rgba(255, 138, 0, 0.7);
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;

class LoadQuery extends React.Component {
  render() {
    const { onLoad, children } = this.props;

    return (
      <Query query={LOAD_QUERY} context={authContext()}>
        {({ loading, error, data }) => {
          if (loading || error) {
            if (error) console.error(error.message);
            return (
              <Container>
                <LoadingIcon />
              </Container>
            );
          }

          onLoad(data);
          return children;
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (data) => dispatch(updateAppData(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadQuery);
