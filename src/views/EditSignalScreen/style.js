import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #1b1b1b;
  padding: 18px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 27vh;
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

export const Title = styled.h1`
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  transition: all 0.2s ease-in-out;

  ${props => props.opaque && css`
    opacity: 0.2;
  `}
`;

export const FieldContainer = styled.div`
  background-color: #545454;
  margin: 18px 0;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  ${props => props.opaque && css`
    opacity: 0.2;
  `}
`;

export const FieldLabel = styled.div`
  background-color: #434343;
  width: 100%;
  height: 37px;
  padding: 0 11px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;

  svg {
    fill: #fff;
  }
`;

export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 139px;
  min-height: 100%;
  max-height: 100%;
  padding: 10px 11px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family: inherit;
  font-size: 1.125rem;
  letter-spacing: 0.01em;
  color: #fff;
`;

export const DatetimeContainer = styled.div`
  input {
    background-color: transparent;
    width: 100%;
    padding: 10px 11px;
    display: block;
    font-family: inherit;
    font-size: 1.125rem;
    letter-spacing: 0.01em;
    color: #fff;
  }

  .rdtPicker {
    background-color: #545454;
    display: block;
    width: calc(100% - 22px);
    padding: 0;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    bottom: 5px;
    left: 11px;
    letter-spacing: 0.01em;
    color: #fff;
    overflow: hidden;
    opacity: 0;
    transform: translate3d(0, 10px, 0);
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  .rdtOpen .rdtPicker {
    opacity: 1;
    pointer-events: all;
    transform: translate3d(0, 0, 0);
  }

  .rdtPicker table {
    border-spacing: 0;
  }

  .rdtPicker th {
    border: none;
  }

  .rdtPicker thead tr:first-child th:hover {
    background-color: transparent;
  }

  .rdtPicker td.rdtDisabled {
    opacity: 0.2;
  }

  .rdtPrev, .rdtSwitch, .rdtNext {
    background-color: #434343;
    margin-bottom: 5px;
    padding: 8px 0;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .dow {
    padding-top: 10px;
  }

  .rdtCounter .rdtBtn:hover {
    background-color: transparent;
  }

  .rdtTimeToggle {
    padding: 10px 0;
  }
`;
