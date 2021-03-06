import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import ResumeGoals from './components/ResumeGoals';
import ItemGoal from './components/ItemGoal';

import routesConstants from '../../utils/routesConstants';
import { IReducerState } from '../../store/rootReducer';

import {
  Container,
  TitleListGoals,
  ContainerGoals,
  AddGoalBtn,
  FeedbackNoGoals,
} from './styles';

const Home: React.FC = () => {
  const goals = useSelector((state: IReducerState) => state.goalsReducer.goals);

  return (
    <Header title="Goals">
      <Container>
        <ResumeGoals goals={goals} />
        <ContainerGoals>
          <TitleListGoals>Your goals</TitleListGoals>
          {!!goals && goals.map(goal => <ItemGoal goal={goal} key={goal.id} />)}
          {!!goals && goals.length === 0 && (
            <FeedbackNoGoals>No have goals registered</FeedbackNoGoals>
          )}
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
