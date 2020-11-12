import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import ResumeGoals from './components/ResumeGoals';
import ItemGoal from './components/ItemGoal';

import { asyncExampleAction } from '../../store/actions/app.actions';

import { Container, TitleListGoals, ContainerGoals } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExampleAction({ newText: 'novo teste' }));
  }, [dispatch]);

  return (
    <Header>
      <Container>
        <ResumeGoals />
        <ContainerGoals>
          <TitleListGoals>Your goals</TitleListGoals>
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
          <ItemGoal />
        </ContainerGoals>
      </Container>
    </Header>
  );
};

export default Home;
