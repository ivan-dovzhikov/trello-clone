import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewList, { NewListProps } from './NewList';
import { BrowserRouter } from 'react-router-dom';

describe('Test list create button', () => {
  const setup = () => {
    const props: NewListProps = {
      onCreate: jest.fn(),
    };

    render(
      <BrowserRouter>
        <NewList {...props} />
      </BrowserRouter>
    );

    return {
      button: screen.getByRole('button', { name: 'New List' }),
      ...props,
    };
  };

  it('should render button', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  it('should display form on click', () => {
    const { button } = setup();
    userEvent.click(button);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display button back on cancel click', () => {
    const { button } = setup();
    userEvent.click(button);
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(
      screen.getByRole('button', { name: 'New List' })
    ).toBeInTheDocument();
  });

  it('should call onCreate with typed value on submit click', () => {
    const { button, onCreate } = setup();
    userEvent.click(button);
    const typedValue = 'twinkle twinkle little star';
    userEvent.type(screen.getByRole('textbox'), typedValue);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onCreate).toBeCalledWith(typedValue);
  });
});
