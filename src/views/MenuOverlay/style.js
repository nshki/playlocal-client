import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  max-width: 325px;

  & > * {
    margin: 5px 0;
  }
`;
