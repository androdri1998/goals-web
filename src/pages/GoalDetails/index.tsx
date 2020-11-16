import React from 'react';
import { Link } from 'react-router-dom';
import { MdAttachMoney } from 'react-icons/md';

import Header from '../../components/Header';
import DetailsGoal from './components/DetailsGoal';
import ItemDeposit from './components/ItemDeposit';

import routesConstants from '../../utils/routesConstants';

import {
  Container,
  AddDepositBtn,
  ContainerDeposits,
  TitleListDeposit,
} from './styles';

const GoalDetails: React.FC = () => {
  return (
    <Header withBackButton title="Goal Details">
      <Container>
        <DetailsGoal />
        <ContainerDeposits>
          <TitleListDeposit>Your deposits</TitleListDeposit>
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
          <ItemDeposit />
        </ContainerDeposits>
        <Link to={routesConstants.ADD_DEPOSIT}>
          <AddDepositBtn>
            <MdAttachMoney size={20} />
          </AddDepositBtn>
        </Link>
      </Container>
    </Header>
  );
};

export default GoalDetails;
