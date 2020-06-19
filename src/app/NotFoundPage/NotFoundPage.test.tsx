import React from 'react';
import NotFoundPage from './NotFoundPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Test Not found page component', () => {
  const setup = () => {
    const message = 'some message';

    render(
      <BrowserRouter>
        <NotFoundPage message={message} />
      </BrowserRouter>
    );

    return message;
  };

  it('should render given message', () => {
    const message = setup();

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render "Go back" button', () => {
    setup();

    expect(screen.getByRole('button', { name: 'Go back' })).toBeInTheDocument();
  });
});
