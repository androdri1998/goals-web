import React from 'react';

import {
  Container,
  ContainerTitle,
  Title,
  TitleValue,
  Value,
  ValueTotal,
  ProgressBar,
  Footer,
  ContainerValue,
} from './styles';

const ItemGoal: React.FC = () => {
  return (
    <Container>
      <ContainerTitle>
        <Title>Title asdasd ada dadaasd ad ad a</Title>
        <TitleValue>R$ 1.000,00</TitleValue>
      </ContainerTitle>
      <ContainerValue>
        <Value>R$ 20,00</Value>
        <ValueTotal>Saved</ValueTotal>
      </ContainerValue>
      <ProgressBar>
        <div />
      </ProgressBar>
      <Footer>
        <p>00/00/0000</p>
        <p>Restam 4 meses</p>
      </Footer>
    </Container>
  );
};

export default ItemGoal;
