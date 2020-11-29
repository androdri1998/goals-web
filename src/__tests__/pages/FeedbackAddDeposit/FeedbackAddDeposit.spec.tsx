import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FeedbackAddDeposit from '../../../pages/FeedbackAddDeposit';

jest.mock('../../../store', () => {
  return {
    history: {
      // eslint-disable-next-line no-console
      push: () => console.log('Validate push'),
    },
  };
});

describe('FeedbackAddDeposit page', () => {
  it('should be able to render FeedbackAddDeposit page', () => {
    const { getByText, getByTestId } = render(<FeedbackAddDeposit />);

    expect(getByText('Deposit added with success')).toBeTruthy();
    expect(getByTestId('home-button')).toBeTruthy();
  });

  it('should be able to go Home page', () => {
    const { getByTestId } = render(<FeedbackAddDeposit />);

    const consoleSpy = jest.spyOn(console, 'log');
    const homeButton = getByTestId('home-button');

    fireEvent.click(homeButton);

    expect(consoleSpy).toBeCalledWith('Validate push');
  });
});
