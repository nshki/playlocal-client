import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2a2a2a;
  padding: 0 15px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 50px;
  overflow-y: scroll;

  &.page-enter {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  &.page-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.3s ease-in-out;
  }

  &.page-exit-active {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
`;

export const Card = styled.div`
  background-color: #545454;
  width: 100%;
  margin: 16px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  background-color: #444;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 11px;
`;

export const CardAvatar = styled.div`
  background-color: #ffa800;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 43px;
  min-width: 43px;
  height: 43px;
  min-height: 43px;
  margin-right: 11px;
  border: 3px solid #fff;
  border-radius: 100%;
`;

export const CardUsername = styled.h2`
  width: 100%;
  margin: 0;
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
`;

export const CardMeta = styled.div`
  flex-grow: 1;
  margin-top: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const CardMetaText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  color: #fff;
  opacity: 0.5;

  svg {
    fill: #fff;
    margin-right: 4px;
  }
`;

export const CardBody = styled.div`
  padding: 14px 11px;
`;

export const CardBodyMessage = styled.p`
  font-size: 1rem;
  letter-spacing: 0.01em;
  color: #fff;
`;

export const CardBodyActions = styled.div`
  margin-top: 23px;

  & > * {
    margin-top: 8px;
  }
`;
