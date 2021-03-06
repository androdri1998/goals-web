import styled from 'styled-components';

export const Container = styled.main`
  flex: 1;
`;

export const ContainerDeposits = styled.main``;

export const TitleListDeposit = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;

  font-size: 1.6em;
  font-weight: 300;
`;

export const AddDepositBtn = styled.div`
  height: 56px;
  width: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 20px;
  right: 20px;

  border-radius: 50%;
  background: #22223b;
  color: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  i {
    font-size: 28px;
  }
`;

export const FeedbackNoDeposit = styled.p`
  text-align: center;
  margin: 10px;

  font-size: 1em;
  font-weight: 500;
`;
