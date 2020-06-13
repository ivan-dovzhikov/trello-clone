import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Test header component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('should render Home link', () => {
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render Boards link', () => {
    expect(screen.getByRole('link', { name: 'Boards' })).toBeInTheDocument();
  });
});
