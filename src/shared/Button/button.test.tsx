import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Button } from '.';

describe('Test button component', () => {
  const setup = (derivedProps?: {}) => {
    const history = createMemoryHistory();
    const text = '12345';

    const props = {
      onClick: jest.fn(),
    };

    render(
      <Router history={history}>
        <Button {...props} {...derivedProps}>
          {text}
        </Button>
      </Router>
    );

    return {
      ...props,
      button: screen.getByRole('button'),
      text,
    };
  };

  it('should render button', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
  });

  describe('should act like HTML button', () => {
    it('should call passed onClick function', () => {
      const { button, onClick } = setup();
      userEvent.click(button);
      expect(onClick).toBeCalled();
    });

    it('should have disabled attribute', () => {
      const { button } = setup({ disabled: true });
      expect(button).toHaveAttribute('disabled');
    });

    it('should container given text', () => {
      const { button, text } = setup();
      expect(button).toHaveTextContent(text);
    });
  });
});
