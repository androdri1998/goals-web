import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FeedbackAddGoal from '../../../pages/FeedbackAddGoal';

jest.mock('../../../store');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { history } = require('../../../store');

describe('FeedbackAddGoal page', () => {
  it('should be able to render FeedbackAddGoal page', () => {
    const { getByText, getByTestId } = render(<FeedbackAddGoal />);

    expect(getByText('Goal added with success')).toBeTruthy();
    expect(getByTestId('home-button')).toBeTruthy();
  });

  it('should be able to go Home page', () => {
    const mockPush = jest.fn();
    history.push.mockImplementation(mockPush);

    const { getByTestId } = render(<FeedbackAddGoal />);

    const homeButton = getByTestId('home-button');

    fireEvent.click(homeButton);

    expect(mockPush).toBeCalled();
  });
});
