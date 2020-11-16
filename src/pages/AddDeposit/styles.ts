import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px 20px;

  justify-content: space-between;
`;

export const ContainerInputs = styled.div``;

export const ContainerButtons = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const BackButton = styled.button`
  flex: 1;
  height: 40px;
  padding: 10px;
  margin-right: 5px;

  font-size: 1em;
  color: white;
  border: none;
  border-radius: 10px;
  background: #d18c0d;
  font-weight: 500;

  &:hover {
    transition: 0.6s background;
    background: ${shade(0.2, '#d18c0d')};
  }
`;

export const AddButton = styled.button`
  flex: 1;
  height: 40px;
  padding: 10px;
  margin-left: 5px;

  font-size: 1em;
  color: white;
  border: none;
  border-radius: 10px;
  background: #176191;
  font-weight: 500;

  &:hover {
    transition: 0.6s background;
    background: ${shade(0.2, '#176191')};
  }
`;
