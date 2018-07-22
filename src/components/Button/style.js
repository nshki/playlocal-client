import styled, { css } from 'styled-components';

export const Container = styled.button`
  background-color: #444;
  width: 100%;
  padding: 12px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fff;

  ${props => props.action && css`
    background-color: #ff8a00;
  `}
`;
