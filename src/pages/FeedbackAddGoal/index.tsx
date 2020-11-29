import React, { useCallback } from 'react';
import { MdCheck } from 'react-icons/md';

import Header from '../../components/Header';

import { history } from '../../store';
import routesConstants from '../../utils/routesConstants';
import { Container, ContainerCheck, Description, HomeButton } from './styles';

const FeedbackAddGoal: React.FC = () => {
  const handleGoHome = useCallback(() => {
    history.push(routesConstants.HOME);
  }, []);

  return (
    <Header title="Added success">
      <Container>
        <ContainerCheck>
          <MdCheck size={100} color="#F2E9E4" />
        </ContainerCheck>
        <Description>Goal added with success</Description>
        <HomeButton data-testid="home-button" onClick={handleGoHome}>
          Back to home
        </HomeButton>
      </Container>
    </Header>
  );
};

export default FeedbackAddGoal;
