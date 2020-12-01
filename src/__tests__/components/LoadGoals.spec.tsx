import React from 'react';
import { render } from '@testing-library/react';

import LoadGoals from '../../components/LoadGoals';

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}));

describe('LoadGoals component', () => {
  it('should be able to render LoadGoals component', () => {
    const { getByTestId } = render(
      <LoadGoals>
        <div data-testid="testId" />
      </LoadGoals>,
    );

    expect(getByTestId('testId')).toBeTruthy();
  });
});
