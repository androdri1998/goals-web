import React from 'react';
import { render } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';

import Goal from '../../../../models/Goal';
import ResumeGoals from '../../../../pages/Home/components/ResumeGoals';

describe('ResumeGoals component', () => {
  it('should be able to render ResumeGoals component', () => {
    const goal1 = new Goal('Teste goal 1', 30, '2020-12-01 00:00:00', [
      {
        id: uuidv4(),
        createdAt: '2020-11-28 00:00:00',
        description: 'Test deposit',
        value: 2200,
      },
    ]);
    const goal2 = new Goal('Teste goal 2', 30, '2020-12-01 00:00:00', [
      {
        id: uuidv4(),
        createdAt: '2020-11-28 00:00:00',
        description: 'Test deposit',
        value: 2200,
      },
    ]);
    const goal3 = new Goal('Teste goal 2', 30, '2020-12-01 00:00:00', [
      {
        id: uuidv4(),
        createdAt: '2020-11-28 00:00:00',
        description: 'Test deposit',
        value: 3000,
      },
    ]);
    const { getByText } = render(<ResumeGoals goals={[goal1, goal2, goal3]} />);

    expect(getByText('R$ 90.00')).toBeTruthy();
    expect(getByText('R$ 74.00')).toBeTruthy();
    expect(getByText('1')).toBeTruthy();
  });
});
