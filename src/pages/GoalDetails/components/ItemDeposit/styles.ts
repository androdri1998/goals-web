import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin-bottom: 20px;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Description = styled.p`
  flex: 1;
  font-size: 0.9em;
  font-weight: 300;

  padding-right: 20px;
`;

export const ContainerValue = styled.div`
  display: flex;
  align-items: center;
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

export const ProgressBar = styled.div`
  width: 100%;
  height: 15px;
  margin: 10px 0;

  border-radius: 10px;
  background: #f2e9e4;

  div {
    display: flex;
    justify-content: flex-end;

    height: 100%;
    width: 20%;

    background: #4a4e69;
    border-radius: 10px;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  font-weight: 300;
`;
