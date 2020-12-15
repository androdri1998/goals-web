import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { MdFeaturedPlayList, MdAttachMoney } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { history } from '../../store';
import {
  asyncAddDeposit,
  asyncListGoal,
} from '../../store/actions/goals.actions';
import { IReducerState } from '../../store/rootReducer';

import {
  Container,
  ContainerInputs,
  ContainerButtons,
  BackButton,
  AddButton,
  FeedbackError,
} from './styles';

interface IParams {
  goalId: string;
}

const AddDeposit: React.FC = () => {
  const dispatch = useDispatch();
  const goal = useSelector((state: IReducerState) => state.goalsReducer.goal);
  const params = useParams<IParams>();

  const [description, setDescription] = useState<string>('');
  const [valueDeposit, setValueDeposit] = useState<string>('');

  useEffect(() => {
    dispatch(asyncListGoal({ goalId: params.goalId }));
  }, [params, dispatch]);

  const handleBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleDescription = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setDescription(event.currentTarget.value);
    },
    [],
  );

  const handleValueDeposit = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setValueDeposit(event.currentTarget.value);
    },
    [],
  );

  const handleAddDeposit = useCallback(() => {
    dispatch(
      asyncAddDeposit({
        goalId: params.goalId,
        description,
        value: parseFloat(valueDeposit),
      }),
    );
  }, [dispatch, description, valueDeposit, params.goalId]);

  const currencyGoal = useMemo(() => {
    if (goal) {
      return goal.value;
    }
    return 0;
  }, [goal]);

  const currencyDepositsGoal = useMemo(() => {
    if (goal && goal.deposits && goal.value) {
      const totalValueDeposits = goal.deposits.reduce((acumulador, deposit) => {
        return acumulador + deposit.value;
      }, 0);

      return totalValueDeposits;
    }

    return 0;
  }, [goal]);

  const maxDeposit = useMemo(() => {
    return (currencyGoal - currencyDepositsGoal) / 100;
  }, [currencyDepositsGoal, currencyGoal]);

  return (
    <Header withBackButton title="Add deposit">
      <Container>
        <ContainerInputs>
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdFeaturedPlayList}
            name="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
          <Input
            styles={{ marginBottom: 10 }}
            icon={MdAttachMoney}
            name="Deposit value"
            type="number"
            placeholder="Deposit value"
            value={valueDeposit}
            onChange={handleValueDeposit}
            max={maxDeposit}
          />
          {parseFloat(valueDeposit) > maxDeposit && (
            <FeedbackError>
              This value higher than value necessary to complete goal
            </FeedbackError>
          )}
        </ContainerInputs>
        <ContainerButtons>
          <BackButton data-testid="back-button" onClick={handleBack}>
            Back
          </BackButton>
          <AddButton
            data-testid="add-button"
            disabled={
              !description ||
              !valueDeposit ||
              parseFloat(valueDeposit) > maxDeposit
            }
            onClick={handleAddDeposit}
          >
            Add
          </AddButton>
        </ContainerButtons>
      </Container>
    </Header>
  );
};

export default AddDeposit;
