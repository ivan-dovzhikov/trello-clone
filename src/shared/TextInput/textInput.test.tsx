import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { TextArea, TextAreaProps } from '.';

describe('Test TextInput component', () => {
  const setup = (props?: TextAreaProps) => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <TextArea {...props} />
      </Router>
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
