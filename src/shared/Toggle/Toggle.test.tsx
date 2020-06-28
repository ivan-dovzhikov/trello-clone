import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Toggle, ToggleProps } from '.';

describe('Test Toggle component', () => {
  const setup = (derivedProps?: ToggleProps) => {
    const props: ToggleProps = {
      onChange: jest.fn(),
    };

    render(
      <BrowserRouter>
        <Toggle {...props} {...derivedProps} />
      </BrowserRouter>
    );

    return {
      ...props,
      chackbox: screen.getByRole('checkbox'),
    };
  };

  it('should render checkbox', () => {
    const { chackbox } = setup();
    expect(chackbox).toBeInTheDocument();
  });

  describe('should act like HTML checkbox', () => {
    it('should call passed onChange function', () => {
      const { chackbox, onChange } = setup();
      userEvent.click(chackbox);
      expect(onChange).toBeCalled();
    });

    it('should have disabled attribute', () => {
      const { chackbox } = setup({ disabled: true });
      expect(chackbox).toHaveAttribute('disabled');
    });
  });
});
