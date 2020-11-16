import React, { useCallback } from 'react';
import { MdCheck } from 'react-icons/md';

import Header from '../../components/Header';

import routesConstants from '../../utils/routesConstants';
import { history } from '../../store';

import { Container, ContainerCheck, Description, HomeButton } from './styles';

const FeedbackAddDeposit: React.FC = () => {
  const handleGoDetails = useCallback(() => {
    history.push(routesConstants.GOAL_DETAILS);
  }, []);

  return (
    <Header withBackButton title="Deposit added success">
      <Container>
        <ContainerCheck>
          <MdCheck size={100} color="#F2E9E4" />
        </ContainerCheck>
        <Description>Deposit added with success</Description>
        <HomeButton onClick={handleGoDetails}>Back to details</HomeButton>
      </Container>
    </Header>
  );
};

export default FeedbackAddDeposit;
