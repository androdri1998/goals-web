import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

import routesConstants from '../../../../utils/routesConstants';
import Goal from '../../../../models/Goal';

import { formatCurrency } from '../../../../utils/helpers';

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

interface IItemGoalProps {
  goal: Goal;
}

const ItemGoal: React.FC<IItemGoalProps> = ({ goal }) => {
  const currencyGoal = useMemo(() => {
    return formatCurrency({ value: goal.value });
  }, [goal.value]);

  const currencyDepositsGoal = useMemo(() => {
    return formatCurrency({ value: 0 });
  }, []);

  const percentageToReachGoal = useMemo(() => {
    return 0;
  }, []);

  const deadlineToReachGoal = useMemo(() => {
    return format(new Date(goal.whenReach), 'dd/MM/yyyy');
  }, [goal.whenReach]);

  const linkToGoalDetails = useMemo(() => {
    return routesConstants.GOAL_DETAILS.replace(':goalId', goal.id);
  }, [goal.id]);

  return (
    <Container>
      <Link to={linkToGoalDetails}>
        <ContainerTitle>
          <Title>{goal.title}</Title>
          <TitleValue>{currencyGoal}</TitleValue>
        </ContainerTitle>
      </Link>
      <ContainerValue>
        <Value>{currencyDepositsGoal}</Value>
        <ValueTotal>Saved</ValueTotal>
      </ContainerValue>
      <ProgressBar percentage={percentageToReachGoal}>
        <div />
      </ProgressBar>
      <Footer>
        <p>{`Until ${deadlineToReachGoal}`}</p>
      </Footer>
    </Container>
  );
};

export default ItemGoal;
