import styled from 'styled-components';

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

  @media (min-width: 768px) {
    width: 360px;
    top: 50px;
    right: auto;
  }

  &.page-enter {
    transform: translate3d(0, 100%, 0);
  }

  &.page-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit {
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit-active {
    transform: translate3d(0, 100%, 0);
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

  td.rdtMonth:hover,
  td.rdtYear:hover,
  .rdtPicker thead tr:first-child th:hover,
  .rdtPicker .rdtTimeToggle:hover,
  .rdtPicker td.rdtDay:hover:not(.rdtActive),
  .rdtCounter .rdtBtn:hover {
    background-color: transparent;
  }

  .rdtTimeToggle {
    padding: 10px 0;
  }
`;
