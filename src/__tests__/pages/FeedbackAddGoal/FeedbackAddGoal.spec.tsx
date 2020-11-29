import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FeedbackAddGoal from '../../../pages/FeedbackAddGoal';

jest.mock('../../../store', () => {
  return {
    history: {
      // eslint-disable-next-line no-console
      push: () => console.log('Validate push'),
    },
  };
});

describe('FeedbackAddGoal page', () => {
  it('should be able to render FeedbackAddGoal page', () => {
    const { getByText, getByTestId } = render(<FeedbackAddGoal />);

    expect(getByText('Goal added with success')).toBeTruthy();
    expect(getByTestId('home-button')).toBeTruthy();
  });

  it('should be able to go Home page', () => {
    const { getByTestId } = render(<FeedbackAddGoal />);

    const consoleSpy = jest.spyOn(console, 'log');
    const homeButton = getByTestId('home-button');

    fireEvent.click(homeButton);

    expect(consoleSpy).toBeCalledWith('Validate push');
  });
});
