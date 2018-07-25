import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  position: fixed;
  top: 50px;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    width: calc(100vw - 360px);
    height: 100vh;
    left: 360px;
    top: 0;

    &:after {
      content: '';
      width: 360px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
    }
  }

  ${props => !props.signedIn && css`
    height: calc(100vh - 50px);

    @media (min-width: 768px) {
      height: 100vh;
    }
  `}

  ${props => props.short && css`
    height: calc(27vh - 50px);

    @media (min-width: 768px) {
      height: 100vh;
    }
  `}
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

export const Signal = styled.div`
  width: 23px;
  height: 23px;
  position: relative;
  transform: translate(-50%, -50%);

  a {
    background-color: #ff8a00;
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: block;
    border: 3px solid #fff;
    border-radius: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    z-index: 2;
    cursor: pointer;
  }

  ${props => props.me && css`
    &:before {
      content: '';
      background-color: rgba(0, 148, 255, 0.7);
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 100%;
      position: absolute;
      top: 0;
      left: 0;
      animation: ${pulse} 1.5s ease-in-out infinite;
    }

    a {
      background-color: #0094ff;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    }
  `}

  ${props => props.me && props.published && css`
    &:before {
      background-color: rgba(255, 138, 0, 0.7);
    }
  `}
`;
