import styled, { css } from 'styled-components';

export default styled.div`
  background-color: #545454;
  margin: 18px 0;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  ${props => props.opaque && css`
    opacity: 0.2;
  `}
`;
