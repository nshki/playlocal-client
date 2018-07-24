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

export const Section = styled.div`
  & + & {
    margin-top: 40px;
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

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const RadioButton = styled.label`
  flex-grow: 1;
  display: block;
  overflow: hidden;

  &:first-of-type {
    border-bottom-left-radius: 3px;
  }

  &:last-of-type {
    border-bottom-right-radius: 3px;
  }

  [type="radio"] {
    display: none;
  }
`;

export const RadioButtonText = styled.p`
  padding: 10px 11px;
  text-align: center;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  color: #fff;
  transition: all 0.2s ease-in-out;

  [type="radio"]:checked + & {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
