import styled from 'styled-components';

export const Container = styled.div`
  background-color: #a55151;
  width: 100%;
  max-width: 325px;
  border-radius: 3px;
  text-align: center;
  overflow: hidden;
`;

export const Label = styled.h3`
  background-color: #7e0000;
  padding: 8px;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
`;

export const Text = styled.h2`
  padding: 27px 5px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.01em;
  color: #fff;
`;

export const ButtonContainer = styled.div`
  margin: 0 9px 9px;

  button {
    background-color: #7e0000;
  }
`;
