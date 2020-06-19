import React from 'react';
import NewBoard, { NewBoardProps } from './NewBoard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('Test board create button', () => {
  const setup = () => {
    const props: NewBoardProps = {
      onCreate: jest.fn(),
    };

    render(
      <BrowserRouter>
        <NewBoard {...props} />
      </BrowserRouter>
    );
    return {
      button: screen.getByRole('button', { name: 'Edit' }),
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
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
  });

  it('should call onCreate with typed value on submit click', () => {
    const { button, onCreate } = setup();
    userEvent.click(button);
    const typedValue = 'have to type something';
    userEvent.type(screen.getByRole('textbox'), typedValue);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onCreate).toBeCalledWith(typedValue);
  });
});
