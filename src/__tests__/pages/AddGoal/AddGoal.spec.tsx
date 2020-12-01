/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState as useStateMock } from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddGoal from '../../../pages/AddGoal';

const mockUseDispatch = jest.fn();

jest.mock('../../../store');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { history } = require('../../../store');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('connected-react-router', () => {
  return {
    routerMiddleware: jest.fn(),
    connectRouter: jest.fn(),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => mockUseDispatch,
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

describe('AddGoal page', () => {
  const setState = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useStateMock.mockImplementation((init: any) => [
      'value-to-able-click',
      setState,
    ]);
  });

  it('should be able to render AddGoal page', () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(
      <AddGoal />,
    );

    expect(getByText('Add goal')).toBeTruthy();
    expect(getByPlaceholderText('Title')).toBeTruthy();
    expect(getByPlaceholderText('Expect value')).toBeTruthy();
    expect(getByPlaceholderText('When will it reach?')).toBeTruthy();
    expect(getByTestId('back-button')).toBeTruthy();
    expect(getByTestId('add-button')).toBeTruthy();
  });

  it('should be able to change input text', () => {
    const { getByPlaceholderText } = render(<AddGoal />);

    const titleInput = getByPlaceholderText('Title');
    const expectValueInput = getByPlaceholderText('Expect value');
    const reachDateInput = getByPlaceholderText('When will it reach?');

    fireEvent.change(titleInput, {
      target: { value: 'test value title' },
    });

    fireEvent.change(expectValueInput, {
      target: { value: '12' },
    });

    fireEvent.change(reachDateInput, {
      target: { value: '2020-11-29' },
    });

    expect(setState).toBeCalledWith('test value title');
    expect(setState).toBeCalledWith('12');
    expect(setState).toBeCalledWith('2020-11-29');
  });

  it('should be able to click back button', () => {
    const mockGoBack = jest.fn();
    history.goBack.mockImplementation(mockGoBack);

    const { getByTestId } = render(<AddGoal />);

    const backButton = getByTestId('back-button');
    fireEvent.click(backButton);

    expect(mockGoBack).toBeCalled();
  });

  it('should be able to click add button', () => {
    const { getByTestId } = render(<AddGoal />);

    const addButton = getByTestId('add-button');
    fireEvent.click(addButton);

    expect(mockUseDispatch).toBeCalled();
  });
});
