import styled from 'styled-components';

export const Container = styled.div`
  background-color: #2a2a2a;
  width: 100%;
  padding: 20px 20px 20px;
  position: fixed;
  z-index: 2;
  top: 50px;
  left: 0;
  bottom: 0;
  overflow-y: scroll;

  @media (min-width: 768px) {
    max-width: 360px;
  }
`;

export const Graphic = styled.img`
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
`;

export const Headline = styled.h2`
  margin: 1rem 0;
  color: #fff;
  text-align: center;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`;

export const Text = styled.p`
  margin: 1rem 0;
  line-height: 1.4;
  color: #fff;

  small {
    display: block;
    margin-top: 2rem;
    color: rgba(255, 255, 255, 0.5);
  }

  a {
    text-decoration: underline;
    color: inherit;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: #fff;
    }
  }
`;
