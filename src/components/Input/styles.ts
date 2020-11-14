/* eslint-disable @typescript-eslint/no-unused-vars */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.p`
  margin-bottom: 5px;
  font-size: 0.7em;
  color: #4a4e69;
`;

interface IContainerInput {
  isFocused: boolean;
}

export const ContainerInput = styled.div<IContainerInput>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 45px;

  border: solid 2px #4a4e69;
  border-radius: 10px;

  ${props =>
    props.isFocused &&
    css`
      border-color: #c9ada7;
    `}
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
`;

export const InputText = styled.input`
  height: 100%;
  flex: 1;
  padding: 10px 0;
  padding-right: 10px;
  font-size: 1em;
  background: transparent;

  border-radius: 10px;
  border: none;
`;
