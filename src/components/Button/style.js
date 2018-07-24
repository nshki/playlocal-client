import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.button`
  background-color: #444;
  width: 100%;
  padding: 12px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.1em;
  color: #fff;

  ${props => props.isAction && css`
    background-color: #ff8a00;
  `}
`;

export const RouteContainer = Container.withComponent(Link);
