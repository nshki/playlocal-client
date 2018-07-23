import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 50px;
  bottom: 50px;
  transition: all 0.3s ease-in-out;

  ${props => !props.signedIn && css`
    bottom: 0;
  `}

  ${props => props.short && css`
    bottom: 73vh;
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
