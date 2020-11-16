import React from 'react';
import { Link } from 'react-router-dom';

import routesConstants from '../../../../utils/routesConstants';

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
      <Link to={routesConstants.GOAL_DETAILS}>
        <ContainerTitle>
          <Title>My new Objective</Title>
          <TitleValue>R$ 1.000,00</TitleValue>
        </ContainerTitle>
      </Link>
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
