import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Button } from '.';

describe('Test button component', () => {
  const history = createMemoryHistory();

  it('should render button', () => {
    render(
      <Router history={history}>
        <Button />
      </Router>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  describe('button component should act like HTML button', () => {
    it('should call passed onClick function', () => {
      const func = jest.fn();
      render(
        <Router history={history}>
          <Button onClick={func} />
        </Router>
      );

      userEvent.click(screen.getByRole('button'));
      expect(func).toBeCalled();
    });

    it('should have disabled attribute', () => {
      render(
        <Router history={history}>
          <Button disabled={true} />
        </Router>
      );

      expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });
  });
});
