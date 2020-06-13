import React from 'react';
import NewCard, { NewCardProps } from './NewCard';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Test New card component', () => {
  const setup = () => {
    const props: NewCardProps = {
      onCreate: jest.fn(),
    };

    render(
      <BrowserRouter>
        <NewCard {...props} />
      </BrowserRouter>
    );

    return {
      button: screen.getByRole('button', { name: 'New Card' }),
      ...props,
    };
  };

  it('should render button', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  it('should render textarea on button click', () => {
    const { button } = setup();
    userEvent.click(button);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
