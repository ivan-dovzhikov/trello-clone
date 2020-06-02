import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { TextArea } from '.';

describe('Test TextInput component', () => {
  const history = createMemoryHistory();

  it('should render textarea element', () => {
    render(
      <Router history={history}>
        <TextArea />
      </Router>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should render textarea with given value', () => {
    const value = 'test';
    render(
      <Router history={history}>
        <TextArea value={value} />
      </Router>
    );

    expect(screen.getByRole('textbox') as HTMLTextAreaElement).toHaveValue(
      value
    );
  });

  it('should render label on demand', () => {
    const label = 'label';
    render(
      <Router history={history}>
        <TextArea labelValue={label} />
      </Router>
    );

    // Component renders a material-ui TextareaAutosize component which creates two elements.
    // Therefore this test have to query array of both to not get error
    expect(screen.getAllByLabelText(label)[0]).toBeInTheDocument();
  });

  it('should call passed passed function on change', async () => {
    const func = jest.fn();
    render(
      <Router history={history}>
        <TextArea disabled={false} onChange={func} />
      </Router>
    );

    const typedValue = 'typedValue';
    await userEvent.type(screen.getByRole('textbox'), typedValue);

    expect(func).toBeCalledTimes(typedValue.length);
  });
});
