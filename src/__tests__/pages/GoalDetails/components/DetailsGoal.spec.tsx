import React from 'react';
import { render } from '@testing-library/react';

import DetailsGoal from '../../../../pages/GoalDetails/components/DetailsGoal';

describe('DetailsGoal component', () => {
  it('should be able to render DetailsGoal component', () => {
    const goal = {
      id: '442ac5e8-74ed-4c25-a785-b56e4d3f82bb',
      title: 'Test goal 1',
      value: 3000,
      whenReach: '2020-12-01 00:00:00',
      createdAt: '2020-11-28 00:00:00',
      updatedAt: '2020-11-28 00:00:00',
      deposits: [
        {
          id: '1a86c07a-95c7-46fd-b165-8bfc1b9d6413',
          description: 'Test deposit',
          value: 1200,
          createdAt: '2020-11-28 00:00:00',
        },
      ],
    };

    const { getByText } = render(<DetailsGoal goal={goal} />);

    expect(getByText('Test goal 1')).toBeTruthy();
    expect(getByText('R$ 12.00')).toBeTruthy();
    expect(getByText('R$ 30.00')).toBeTruthy();
    expect(getByText('1 Deposits')).toBeTruthy();
    expect(getByText('Until 01/12/2020')).toBeTruthy();
  });

  it('should be able to render goal reached', () => {
    const goal = {
      id: '442ac5e8-74ed-4c25-a785-b56e4d3f82bb',
      title: 'Test goal 1',
      value: 3000,
      whenReach: '2020-12-01 00:00:00',
      createdAt: '2020-11-28 00:00:00',
      updatedAt: '2020-11-28 00:00:00',
      deposits: [
        {
          id: '1a86c07a-95c7-46fd-b165-8bfc1b9d6413',
          description: 'Test deposit',
          value: 3000,
          createdAt: '2020-11-28 00:00:00',
        },
      ],
    };

    const { getByText, getAllByText } = render(<DetailsGoal goal={goal} />);

    expect(getByText('Test goal 1')).toBeTruthy();
    expect(getAllByText('R$ 30.00')).toBeTruthy();
    expect(getByText('1 Deposits')).toBeTruthy();
    expect(getByText('Goal already reached')).toBeTruthy();
  });
});
