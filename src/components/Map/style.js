import styled, { keyframes } from 'styled-components';

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
  width: 20px;
  height: 20px;
  position: relative;

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

  &:after {
    content: '';
    background-color: #0094ff;
    width: 100%;
    height: 100%;
    display: block;
    border: 3px solid #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
  }
`;
