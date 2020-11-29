import React from 'react';
import { render } from '@testing-library/react';

import GoalDetails from '../../../pages/GoalDetails';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
    useParams: () => ({ goalId: 'e535cfa8-7c51-4815-9a02-4083d800eca5' }),
  };
});

jest.mock('connected-react-router', () => {
  return {
    routerMiddleware: jest.fn(),
    connectRouter: jest.fn(),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: () => ({
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
    }),
  };
});

jest.mock('redux', () => {
  return {
    createStore: jest.fn(),
    combineReducers: jest.fn(),
    applyMiddleware: jest.fn(),
    compose: jest.fn(),
  };
});

jest.mock('redux-saga', () => {
  return jest.fn(() => ({
    run: jest.fn(),
  }));
});

describe('GoalDetails page', () => {
  it('should be to render GoalDetails page', () => {
    const { getByText } = render(<GoalDetails />);

    expect(getByText('Your deposits')).toBeTruthy();
  });
});
