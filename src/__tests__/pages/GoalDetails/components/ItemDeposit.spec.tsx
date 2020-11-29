import React from 'react';
import { render } from '@testing-library/react';

import ItemDeposit from '../../../../pages/GoalDetails/components/ItemDeposit';

describe('ItemDeposit component', () => {
  it('should be able to render ItemDeposit component', () => {
    const deposit = {
      id: '1a86c07a-95c7-46fd-b165-8bfc1b9d6413',
      description: 'Test deposit',
      value: 1200,
      createdAt: '2020-11-28 00:00:00',
    };

    const { getByText } = render(<ItemDeposit deposit={deposit} />);

    expect(getByText('R$ 12.00')).toBeTruthy();
    expect(getByText('Test deposit')).toBeTruthy();
    expect(getByText('28/11/2020 00:00 horas')).toBeTruthy();
  });
});
