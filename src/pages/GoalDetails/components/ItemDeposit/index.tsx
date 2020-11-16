import React from 'react';

import {
  Container,
  Description,
  Value,
  ValueTotal,
  ProgressBar,
  Footer,
  ContainerValue,
} from './styles';

const ItemDeposit: React.FC = () => {
  return (
    <Container>
      <ContainerValue>
        <Value>R$ 20,00</Value>
        <ValueTotal>Saved</ValueTotal>
      </ContainerValue>
      <ProgressBar>
        <div />
      </ProgressBar>
      <Description>My new Objective</Description>
      <Footer>
        <p>00/00/0000</p>
      </Footer>
    </Container>
  );
};

export default ItemDeposit;
