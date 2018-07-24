import styled, { css } from 'styled-components';

export default styled.h1`
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
