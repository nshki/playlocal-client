import styled from 'styled-components';

export const Container = styled.header`
  background-color: #1d1d1d;
  height: 50px;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.h1`
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
`;

export const AvatarButton = styled.button`
  background-color: #ff8a00;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 28px;
  height: 28px;
  border: 2px solid #fff;
  border-radius: 100%;
`;

export const SignInButton = styled.button`
  background-color: transparent;
  cursor: pointer;

  svg {
    fill: #fff;
    transition: all 0.2s ease-in-out;
  }

  &:hover svg {
    opacity: 0.7;
  }
`;
