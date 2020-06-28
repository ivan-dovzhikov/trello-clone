import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea, TextAreaProps } from './TextArea';
import { BrowserRouter } from 'react-router-dom';

describe('Test TextInput component', () => {
  const setup = (props?: TextAreaProps) => {
    render(
      <BrowserRouter>
        <TextArea {...props} />
      </BrowserRouter>
    );

    return {
      textarea: screen.getByRole('textbox'),
    };
  };

  it('should render textarea element', () => {
    const { textarea } = setup();
    expect(textarea).toBeInTheDocument();
  });

  it('should render textarea with given value', () => {
    const value = 'test';
    const { textarea } = setup({ value });
    expect(textarea).toHaveValue(value);
  });

  it('should render label on demand', () => {
    const label = 'label';
    setup({ labelValue: label });
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should call passed passed function on change', () => {
    const onChange = jest.fn();
    setup({ onChange });

    const typedValue = 'typedValue';
    userEvent.type(screen.getByRole('textbox'), typedValue);

    expect(onChange).toBeCalledTimes(typedValue.length);
  });
});
