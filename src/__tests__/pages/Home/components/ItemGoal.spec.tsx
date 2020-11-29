import React from 'react';
import { render } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';

import Goal from '../../../../models/Goal';
import ItemGoal from '../../../../pages/Home/components/ItemGoal';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('ItemGoal component', () => {
  it('should be able to render ItemGoal component', () => {
    const goal = new Goal('Teste goal', 30, '2020-12-01 00:00:00', [
      {
        id: uuidv4(),
        createdAt: '2020-11-28 00:00:00',
        description: 'Test deposit',
        value: 2200,
      },
    ]);
    const { getByText } = render(<ItemGoal goal={goal} />);

    expect(getByText(goal.title)).toBeTruthy();
    expect(getByText('R$ 30.00')).toBeTruthy();
    expect(getByText('R$ 22.00')).toBeTruthy();
    expect(getByText('Until 01/12/2020')).toBeTruthy();
  });
});
