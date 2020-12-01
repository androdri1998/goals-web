/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState as useStateMock } from 'react';
import { render, fireEvent } from '@testing-library/react';

import DetailsGoal from '../../../../pages/GoalDetails/components/DetailsGoal';

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

describe('DetailsGoal component', () => {
  const setState = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useStateMock.mockImplementation((init: any) => [init, setState]);
  });

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

  it('should be able to click delete goal button', () => {
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

    const mockHandleOpenDeleteGoal = jest.fn();

    const { getByTestId } = render(
      <DetailsGoal
        goal={goal}
        handleOpenDeleteGoal={mockHandleOpenDeleteGoal}
      />,
    );

    const deleteGoalBtn = getByTestId('delete-btn-goal');
    fireEvent.click(deleteGoalBtn);

    expect(mockHandleOpenDeleteGoal).toBeCalled();
  });
});
