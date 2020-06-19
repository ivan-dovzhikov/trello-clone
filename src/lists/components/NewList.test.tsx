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
      editButton: screen.getByRole('button', { name: 'Edit' }),
      ...props,
    };
  };

  it('should render button', () => {
    const { editButton } = setup();
    expect(editButton).toBeInTheDocument();
  });

  it('should display form on click', () => {
    const { editButton } = setup();
    userEvent.click(editButton);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should display button back on cancel click', () => {
    const { editButton } = setup();
    userEvent.click(editButton);
    userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
  });

  it('should call onCreate with typed value on submit click', () => {
    const { editButton, onCreate } = setup();
    userEvent.click(editButton);
    const typedValue = 'twinkle twinkle little star';
    userEvent.type(screen.getByRole('textbox'), typedValue);
    userEvent.click(screen.getByRole('button', { name: 'Submit' }));
    expect(onCreate).toBeCalledWith(typedValue);
  });
});
