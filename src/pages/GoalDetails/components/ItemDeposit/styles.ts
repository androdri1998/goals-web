import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 0 20px;
  margin-bottom: 20px;

  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Description = styled.p`
  flex: 1;
  font-size: 1.2em;
  font-weight: 300;

  margin: 5px 0;

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

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;

  font-weight: 300;
`;

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerIcon = styled.button`
  cursor: pointer;
  border: none;
  padding: 5px 7px;
  border-radius: 50%;
  background: transparent;

  &:hover {
    transition: 0.6s;
    background: rgba(0, 0, 0, 0.1);
  }
`;
