import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #1d1d1d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const IconLink = styled.a`
  svg {
    fill: #fff;
    opacity: 0.7;
    max-width: 26px;
    height: auto;
  }
`;

export const PublishToggle = styled.a`
  background-color: #707070;
  display: block;
  width: 37px;
  height: 28px;
  border-radius: 900px;
  position: relative;

  &:after {
    content: '';
    background-color: #c4c4c4;
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 3px;
    left: 3px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
  }

  ${props => props.published && css`
    background-color: #ff8a00;

    &:after {
      background-color: #fff;
      transform: translate3d(9px, 0, 0);
    }
  `}
`;
