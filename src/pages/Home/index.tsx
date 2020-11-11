import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header';
import ResumeGoals from './components/ResumeGoals';

import { asyncExampleAction } from '../../store/actions/app.actions';

import { Container, TitleListGoals } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExampleAction({ newText: 'novo teste' }));
  }, [dispatch]);

  return (
    <Header>
      <Container>
        <ResumeGoals />
        <TitleListGoals>Your goals</TitleListGoals>
      </Container>
    </Header>
  );
};

export default Home;
