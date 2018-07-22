import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;

  &:before {
    content: '';
    background-color: #1d1d1d;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const IconLink = styled(Link)`
  svg {
    fill: #fff;
    opacity: 0.7;
    max-width: 26px;
    height: auto;
  }
`;

export const Dropdown = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;

  svg {
    fill: #fff;
    margin-left: 10px;
    transform: rotate(-90deg);
  }
`;

export const DropdownItems = styled.div`
  background-color: #1d1d1d;
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s ease-in-out;

  ${props => props.open && css`
    transform: translate3d(0, -100%, 0);
  `}
`;

export const DropdownItem = styled.button`
  background-color: #1d1d1d;
  display: block;
  width: 100%;
  padding: 13px 15px;
  border-bottom: 1px solid #707070;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
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

export const BackButton = styled(Link)`
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;

  svg {
    fill: #fff;
    margin-right: 6px;
    vertical-align: middle;
    transform: rotate(-180deg);
  }
`;
