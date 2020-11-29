import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Header from '../../components/Header';

jest.mock('../../store', () => {
  return {
    history: {
      // eslint-disable-next-line no-console
      goBack: () => console.log('Validate go back'),
    },
  };
});

describe('Header component', () => {
  it('should be able to render Header component without back button', () => {
    const { getByText } = render(<Header title="Test header" />);

    expect(getByText('Test header')).toBeTruthy();
  });

  it('should be able to render Header component with back button', () => {
    const { getByText, getByTestId } = render(
      <Header title="Test header" withBackButton />,
    );

    expect(getByText('Test header')).toBeTruthy();
    expect(getByTestId('header')).toBeTruthy();
  });

  it('should be able to click on back button', () => {
    const { getByTestId } = render(
      <Header title="Test header" withBackButton />,
    );

    const consoleSpy = jest.spyOn(console, 'log');
    const backButton = getByTestId('header');

    fireEvent.click(backButton);

    expect(backButton).toBeTruthy();
    expect(consoleSpy).toBeCalledWith('Validate go back');
  });
});
