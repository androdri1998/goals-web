import { getItem, setItem } from './storageApi';
import { keyStoreConstants } from './appConstants';
import Goal from '../models/Goal';

interface IStoreGoal {
  goal: Goal;
}

export const storeGoal = ({ goal }: IStoreGoal): Goal => {
  const goalsString = getItem({ key: keyStoreConstants.GOALS });
  const goals = goalsString ? JSON.parse(goalsString) : [];

  const newGoals = [goal, ...goals];
  setItem({ key: keyStoreConstants.GOALS, data: JSON.stringify(newGoals) });

  return goal;
};

export const listGoalsStored = (): Goal[] => {
  const goalsString = getItem({ key: keyStoreConstants.GOALS });
  const goals = goalsString ? JSON.parse(goalsString) : [];

  return goals;
};
