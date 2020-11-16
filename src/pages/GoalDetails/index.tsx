import React from 'react';
import { Link } from 'react-router-dom';
import { MdAttachMoney } from 'react-icons/md';

import Header from '../../components/Header';

import routesConstants from '../../utils/routesConstants';

import { Container, AddDepositBtn } from './styles';

const GoalDetails: React.FC = () => {
  return (
    <Header withBackButton title="Goal Details">
      <Container>
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
