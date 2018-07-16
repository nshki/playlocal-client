import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  ${props => props.visible && css`
    opacity: 1;
    pointer-events: all;
  `}
`;
