import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2a2a2a;
  padding: 25px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 27vh;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: scroll;

  &.page-enter {
    transform: translate3d(0, 100%, 0);
  }

  &.page-enter-active {
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit {
    opacity: 0;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.div`
  background-color: #ff8a00;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  border: 3px solid #fff;
  border-radius: 100%;
`;

export const MetaContent = styled.div`
  flex-grow: 1;
`;

export const Username = styled.h1`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
`;

export const MetaText = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 2px 0;

  svg {
    fill: rgba(255, 255, 255, 0.5);
  }
`;

export const MetaTextIcon = styled.span`
  display: inline-block;
  width: 15px;
  vertical-align: middle;
  text-align: center;
  margin-right: 10px;
`;

export const Message = styled.p`
  background-color: #111;
  margin-top: 20px;
  padding: 18px 12px;
  border-radius: 5px;
  position: relative;
  font-size: 1.125rem;
  letter-spacing: 0.01em;
  color: #fff;

  &:before {
    content: '';
    background-color: #111;
    width: 20px;
    height: 20px;
    transform-origin: center center;
    transform: rotate(45deg);
    position: absolute;
    z-index: -1;
    top: -10px;
    left: 40px;
  }
`;

export const Actions = styled.div`
  margin-top: 25px;

  & > * {
    margin: 5px 0;
  }
`;
