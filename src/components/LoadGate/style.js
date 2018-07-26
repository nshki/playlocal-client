import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
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

export const LoadingIcon = styled.div`
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

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Fader = styled.div`
  animation: ${fade} 1s ease-in-out;
`;
