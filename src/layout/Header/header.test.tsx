import React from 'react';
import Header from './index';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Test header component', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Header />
      </Router>
    );
  });

  it('should render Home link', () => {
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render Boards link', () => {
    expect(screen.getByRole('link', { name: 'Boards' })).toBeInTheDocument();
  });
});
