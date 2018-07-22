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
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
`;

export const FieldContainer = styled.div`
  background-color: #545454;
  margin: 18px 0;
  border-radius: 3px;
  overflow: hidden;
`;

export const FieldLabel = styled.div`
  background-color: #434343;
  width: 100%;
  height: 37px;
  padding: 0 11px;
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
  font-family: inherit;
  font-size: 1.125rem;
  letter-spacing: 0.01em;
  color: #fff;
`;
