import React, { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdAttachMoney } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import DetailsGoal from './components/DetailsGoal';
import ItemDeposit from './components/ItemDeposit';

import routesConstants from '../../utils/routesConstants';
import { IReducerState } from '../../store/rootReducer';
import { asyncListGoal } from '../../store/actions/goals.actions';
import Goal from '../../models/Goal';

import {
  Container,
  AddDepositBtn,
  ContainerDeposits,
  TitleListDeposit,
  FeedbackNoDeposit,
} from './styles';

interface IParams {
  goalId: string;
}

const GoalDetails: React.FC = () => {
  const dispatch = useDispatch();
  const goal = useSelector((state: IReducerState) => state.goalsReducer.goal);
  const params = useParams<IParams>();

  useEffect(() => {
    dispatch(asyncListGoal({ goalId: params.goalId }));
  }, [params, dispatch]);

  const wasRached = useMemo(() => {
    if (goal && goal.deposits && goal.value) {
      const totalValueDeposits = goal.deposits.reduce((acumulador, deposit) => {
        return acumulador + deposit.value;
      }, 0);

      return totalValueDeposits >= goal.value;
    }

    return false;
  }, [goal]);

  return (
    <Header withBackButton title="Goal Details">
      <Container>
        <DetailsGoal goal={goal as Goal} />
        <ContainerDeposits>
          <TitleListDeposit>Your deposits</TitleListDeposit>
          {goal &&
            goal.deposits &&
            goal.deposits.map(deposit => (
              <ItemDeposit deposit={deposit} key={deposit.id} />
            ))}
          {goal && goal.deposits.length === 0 && (
            <FeedbackNoDeposit>No have deposits registered</FeedbackNoDeposit>
          )}
        </ContainerDeposits>
        {!wasRached && (
          <Link
            to={routesConstants.ADD_DEPOSIT.replace(':goalId', params.goalId)}
          >
            <AddDepositBtn>
              <MdAttachMoney size={20} />
            </AddDepositBtn>
          </Link>
        )}
      </Container>
    </Header>
  );
};

export default GoalDetails;
