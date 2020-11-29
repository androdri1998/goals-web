import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FeedbackAddDeposit from '../../../pages/FeedbackAddDeposit';

jest.mock('../../../store');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { history } = require('../../../store');

describe('FeedbackAddDeposit page', () => {
  it('should be able to render FeedbackAddDeposit page', () => {
    const { getByText, getByTestId } = render(<FeedbackAddDeposit />);

    expect(getByText('Deposit added with success')).toBeTruthy();
    expect(getByTestId('home-button')).toBeTruthy();
  });

  it('should be able to go Home page', () => {
    const mockPush = jest.fn();
    history.push.mockImplementation(mockPush);

    const { getByTestId } = render(<FeedbackAddDeposit />);

    const homeButton = getByTestId('home-button');

    fireEvent.click(homeButton);

    expect(mockPush).toBeCalled();
  });
});
