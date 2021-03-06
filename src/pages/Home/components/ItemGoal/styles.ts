/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  a {
    width: 100%;
    text-decoration: none;
    color: #22223b;
  }
`;

export const ContainerTitle = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.p`
  flex: 1;
  font-size: 1.3em;
  font-weight: 500;

  padding-right: 20px;
`;

export const TitleValue = styled.p`
  font-size: 1em;
  font-weight: 300;
  padding: 5px;

  border-radius: 5px;
  font-weight: 500;
`;

export const ContainerValue = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 5px;

  color: #fafafa;
  border-radius: 5px;
  background: #4a4e69;
`;

export const Value = styled.p`
  font-size: 1.2em;
  font-weight: 500;
`;

export const ValueTotal = styled.div`
  font-size: 1em;
  margin-left: 3px;
`;

interface IProgressBarProps {
  percentage: number;
}

export const ProgressBar = styled.div<IProgressBarProps>`
  width: 100%;
  height: 15px;
  margin: 10px 0;

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

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;

  font-weight: 300;
`;
