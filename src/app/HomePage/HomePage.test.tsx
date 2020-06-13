import React from 'react';
import HomePage from './HomePage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Test home page component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it('should render heading', () => {
    expect(
      screen.getByRole('heading', { name: 'Trello clone' })
    ).toBeInTheDocument();
  });

  it('should render "Get started" link', () => {
    expect(
      screen.getByRole('link', { name: 'Get started' })
    ).toBeInTheDocument();
  });
});
