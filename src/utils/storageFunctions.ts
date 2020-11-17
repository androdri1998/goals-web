import { format } from 'date-fns';

import { getItem, setItem } from './storageApi';
import { keyStoreConstants } from './appConstants';
import Goal from '../models/Goal';

interface IStoreGoalDTO {
  title: string;
  value: number;
  whenReach: Date;
}

export const storeGoal = (goalParams: IStoreGoalDTO): Goal => {
  const whenReach = format(goalParams.whenReach, 'yyyy-MM-dd');
  const goal = new Goal(goalParams.title, goalParams.value, whenReach);

  const goalsString = getItem({ key: keyStoreConstants.GOALS });
  const goals = goalsString ? JSON.parse(goalsString) : [];

  const newGoals = [goal, ...goals];
  setItem({ key: keyStoreConstants.GOALS, data: JSON.stringify(newGoals) });

  return goal;
};
