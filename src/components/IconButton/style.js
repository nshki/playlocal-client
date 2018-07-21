import styled, { css } from 'styled-components';

export const Container = styled.button`
  background-color: #ff8a00;
  display: inline-flex;
  width: 100%;
  height: 36px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-right: 9px;
  border-radius: 3px;

  ${props => props.type === 'twitter' && css`
    background-color: #15c4c4;
  `}

  ${props => props.type === 'discord' && css`
    background-color: #6e33ec;
  `}

  ${props => props.tall && css`
    height: 45px;
    padding-right: 12px;
  `}

  svg {
    fill: #fff;
  }

  & > svg {
    margin-left: auto;
  }
`;

export const IconWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 36px;
  margin-right: 11px;

  ${props => props.tall && css`
    height: 45px;
  `}

  svg {
    max-width: 19px;
    height: auto;
  }
`;

export const Text = styled.p`
  flex-grow: 1;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: left;
  text-shadow: 0 0px 3px rgba(0, 0, 0, 0.5);
  color: #fff;
`;
