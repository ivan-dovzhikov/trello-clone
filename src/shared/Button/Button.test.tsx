import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Button, ButtonProps } from '.';

describe('Test button component', () => {
  const setup = (derivedProps?: ButtonProps) => {
    const text = '12345';

    const props: ButtonProps = {
      onClick: jest.fn(),
    };

    render(
      <BrowserRouter>
        <Button {...props} {...derivedProps}>
          {text}
        </Button>
      </BrowserRouter>
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
