import styled from 'styled-components';

export const Container = styled.div`
  background-color: #1b1b1b;
  padding: 18px 15px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: scroll;

  &.page-enter {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit-active {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
`;

export const TextInput = styled.input`
  background-color: transparent;
  width: 100%;
  padding: 10px 11px;
  display: block;
  font-family: inherit;
  font-size: 1.125rem;
  letter-spacing: 0.01em;
  color: #fff;
`;
