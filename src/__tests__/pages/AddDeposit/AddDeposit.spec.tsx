/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState as useStateMock } from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddDeposit from '../../../pages/AddDeposit';

const mockUseDispatch = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('../../../store');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { history } = require('../../../store');

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
    useDispatch: () => mockUseDispatch,
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

describe('AddDeposit page', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init: any) => [init, setState]);
  });

  it('should be able to render AddDeposit page', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <AddDeposit />,
    );
    expect(getByText('Add deposit')).toBeTruthy();
    expect(getByPlaceholderText('Description')).toBeTruthy();
    expect(getByPlaceholderText('Deposit value')).toBeTruthy();
    expect(getByTestId('back-button')).toBeTruthy();
    expect(getByTestId('add-button')).toBeTruthy();
  });

  it('should be able to click back button', () => {
    const mockGoBack = jest.fn();
    history.goBack.mockImplementation(mockGoBack);

    const { getByTestId } = render(<AddDeposit />);

    const backButton = getByTestId('back-button');
    fireEvent.click(backButton);

    expect(mockGoBack).toBeCalled();
  });

  it('should be able to click add button', () => {
    const { getByTestId } = render(<AddDeposit />);

    const addButton = getByTestId('add-button');
    fireEvent.click(addButton);

    expect(mockUseDispatch).toBeCalled();
  });

  it('should be able to change input text', () => {
    const { getByPlaceholderText } = render(<AddDeposit />);

    const descriptionInput = getByPlaceholderText('Description');
    const depositValueInput = getByPlaceholderText('Deposit value');

    fireEvent.change(descriptionInput, {
      target: { value: 'test value descriprion' },
    });

    fireEvent.change(depositValueInput, {
      target: { value: '12' },
    });

    expect(setState).toBeCalledWith('test value descriprion');
    expect(setState).toBeCalledWith('12');
  });
});
