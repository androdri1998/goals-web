import React, { useState as useStateMock } from 'react';
import { render, fireEvent } from '@testing-library/react';

import ItemDeposit from '../../../../pages/GoalDetails/components/ItemDeposit';

const mockUseDispatch = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockUseDispatch,
  };
});

describe('ItemDeposit component', () => {
  const setState = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useStateMock.mockImplementation((init: any) => [init, setState]);
  });

  it('should be able to render ItemDeposit component', () => {
    const deposit = {
      id: '1a86c07a-95c7-46fd-b165-8bfc1b9d6413',
      description: 'Test deposit',
      value: 1200,
      createdAt: '2020-11-28 00:00:00',
    };

    const { getByText } = render(
      <ItemDeposit
        goalId="442ac5e8-74ed-4c25-a785-b56e4d3f82bb"
        deposit={deposit}
      />,
    );

    expect(getByText('R$ 12.00')).toBeTruthy();
    expect(getByText('Test deposit')).toBeTruthy();
    expect(getByText('28/11/2020 00:00 horas')).toBeTruthy();
  });

  it('should be able to click delete goal button', () => {
    const { getByTestId } = render(
      <ItemDeposit
        goalId="442ac5e8-74ed-4c25-a785-b56e4d3f82bb"
        deposit={{
          id: '1a86c07a-95c7-46fd-b165-8bfc1b9d6413',
          description: 'Test deposit',
          value: 3000,
          createdAt: '2020-11-28 00:00:00',
        }}
      />,
    );

    const deleteGoalBtn = getByTestId('delete-btn-deposit');
    fireEvent.click(deleteGoalBtn);

    expect(setState).toBeCalled();
  });
});
