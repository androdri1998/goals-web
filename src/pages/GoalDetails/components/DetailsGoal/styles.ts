/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const Container = styled.section`
  margin: 10px 20px;
  padding: 30px;

  border-radius: 20px;
  background-color: #22223b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.p`
  color: #f8f7ff;
  font-family: sans-serif;

  font-size: 1.6em;
  font-weight: 600;
`;

export const Header = styled.header`
  margin-bottom: 10px;

  div {
    display: flex;

    align-items: center;
    justify-content: space-between;

    p {
      margin-bottom: 0;
      color: #f8f7ff;
      font-family: sans-serif;

      font-size: 1.2em;
      font-weight: 600;
    }
  }
`;

export const Content = styled.section`
  margin-bottom: 5px;

  div {
    display: flex;

    align-items: center;
    justify-content: flex-start;
  }
`;

interface IProgressBarProps {
  percentage: number;
}

export const ProgressBar = styled.div<IProgressBarProps>`
  flex: 1;
  height: 15px;

  border-radius: 10px;
  background: #f2e9e4;

  div {
    display: flex;
    justify-content: flex-end;

    height: 100%;
    width: ${props => `${props.percentage}%` || '0%'};

    background: #4a4e69;
    border-radius: 10px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  margin-top: 50px;

  .description {
    color: #f8f7ff;
    font-size: 1.2em;

    font-weight: 500;
  }
`;

export const ContainerTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const ContainerIcon = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px 7px;
  border-radius: 50%;
  background: transparent;

  &:hover {
    transition: 0.6s;
    background: rgba(255, 255, 255, 0.3);
  }
`;
