import React from 'react';
import HomePage from './index';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Test home page component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <HomePage />
      </Router>
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
