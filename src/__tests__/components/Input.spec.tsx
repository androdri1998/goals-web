import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from '../../components/Input';

describe('Input component', () => {
  it('should be able to render Input component', () => {
    const { getByPlaceholderText } = render(
      <Input name="test label" placeholder="test-placeholder" />,
    );

    expect(getByPlaceholderText('test-placeholder')).toBeTruthy();
  });

  it('should be able to call onChange on change value Input', () => {
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        name="test label"
        placeholder="test-placeholder"
        onChange={onChange}
      />,
    );

    const placeholderTest = getByPlaceholderText('test-placeholder');

    fireEvent.change(placeholderTest, {
      target: { value: 'test value' },
    });

    expect(placeholderTest).toBeTruthy();
    expect(onChange).toBeCalled();
  });
});
