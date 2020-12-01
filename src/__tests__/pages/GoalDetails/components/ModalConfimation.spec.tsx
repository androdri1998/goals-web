import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ModalConfimation from '../../../../pages/GoalDetails/components/ModalConfimation';

describe('ModalConfimation component', () => {
  it('should be able to render ModalConfimation component', () => {
    const { getByText, getByTestId } = render(
      <ModalConfimation message="test message" />,
    );

    expect(getByText('Atenção')).toBeTruthy();
    expect(getByText('test message')).toBeTruthy();
    expect(getByTestId('cancel-button')).toBeTruthy();
    expect(getByTestId('accept-button')).toBeTruthy();
  });

  it('should be able to click cancel button', () => {
    const mockCancelButton = jest.fn();

    const { getByTestId } = render(
      <ModalConfimation message="test message" onCancel={mockCancelButton} />,
    );

    const cancelButton = getByTestId('cancel-button');
    fireEvent.click(cancelButton);

    expect(mockCancelButton).toBeCalled();
  });

  it('should be able to click accept button', () => {
    const mockAcceptButton = jest.fn();

    const { getByTestId } = render(
      <ModalConfimation message="test message" onAccept={mockAcceptButton} />,
    );

    const acceptButton = getByTestId('accept-button');
    fireEvent.click(acceptButton);

    expect(mockAcceptButton).toBeCalled();
  });
});
