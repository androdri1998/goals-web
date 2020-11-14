import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import ResumeGoals from './components/ResumeGoals';
import ItemGoal from './components/ItemGoal';

import { asyncExampleAction } from '../../store/actions/app.actions';
import routesConstants from '../../utils/routesConstants';

import {
  Container,
  TitleListGoals,
  ContainerGoals,
  AddGoalBtn,
} from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncExampleAction({ newText: 'novo teste' }));
  }, [dispatch]);

  return (
    <Header title="Goals">
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
        <Link to={routesConstants.ADD_GOAL}>
          <AddGoalBtn>
            <i className="material-icons">add</i>
          </AddGoalBtn>
        </Link>
      </Container>
    </Header>
  );
};

export default Home;
