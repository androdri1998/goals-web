import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;

  border-radius: 75px;
  background: #22223b;
`;

export const Description = styled.p`
  margin: 15px 0px;
  font-size: 1.4em;

  color: #4a4e69;
`;

export const HomeButton = styled.button`
  padding: 10px 15px;
  font-size: 1.1em;
  font-weight: 500;

  border-radius: 10px;
  background: #4a4e69;
  color: #f2e9e4;
  border: none;

  &:hover {
    transition: 1s background;
    background: ${shade(0.2, '#4a4e69')};
  }
`;
