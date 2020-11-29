import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../../pages/Home';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
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
    useSelector: () => [
      {
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
      },
    ],
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

describe('Home page', () => {
  it('should be able to render Home page', () => {
    const { getByText, getAllByText } = render(<Home />);

    expect(getByText('Goals')).toBeTruthy();
    expect(getByText('Your goals')).toBeTruthy();
    expect(getByText('Test goal 1')).toBeTruthy();
    expect(getAllByText('R$ 30.00')).toBeTruthy();
    expect(getAllByText('R$ 12.00')).toBeTruthy();
    expect(getByText('Until 01/12/2020')).toBeTruthy();
  });
});
