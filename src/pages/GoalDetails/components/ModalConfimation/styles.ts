import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

export const ContainerConfirmation = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: #f8f7ff;
  padding: 30px;
  border-radius: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Message = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  color: #f8f7ff;

  &:first-child {
    margin-right: 10px;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #d90d0d;

  &:hover {
    transition: 0.6s;
    background-color: ${shade(0.2, '#d90d0d')};
  }
`;

export const AcceptButton = styled(Button)`
  background-color: #0d8bd9;

  &:hover {
    transition: 0.6s;
    background-color: ${shade(0.2, '#0d8bd9')};
  }
`;
