import React from 'react';
import { ListView } from '.';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { AppState } from 'utils';

describe('Test board link', () => {
  const setup = () => {
    const history = createMemoryHistory();

    const props = {
      id: '1',
      title: 'list title',
      onDelete: jest.fn(),
      onEdit: jest.fn(),
    };

    const store = createStore<AppState, any, void, void>(
      combineReducers({
        cards: (state: any = {}) => state,
        lists: (state: any = {}) => state,
        boards: (state: any = {}) => state,
      })
    );

    render(
      <Router history={history}>
        <Provider store={store}>
          <ListView {...props} />
        </Provider>
      </Router>
    );

    return {
      getTextarea: () => screen.getByRole('textbox'),
      getEditButton: () => screen.getByRole('button', { name: 'Edit' }),
      getDeleteButton: () => screen.getByRole('button', { name: 'Delete' }),
      getSubmitButton: () => screen.getByRole('button', { name: 'Submit' }),
      getCancelButton: () => screen.getByRole('button', { name: 'Cancel' }),
      ...props,
    };
  };

  it('should render disabled textarea with given title', () => {
    const { getTextarea } = setup();
    expect(getTextarea()).toBeInTheDocument();
  });

  it('should enable textarea on edit click', () => {
    const { getTextarea, getEditButton } = setup();
    userEvent.click(getEditButton());
    expect(getTextarea()).toBeEnabled();
  });

  it('should reset typed title and disable textarea on cancel click', () => {
    const { title, getTextarea, getEditButton, getCancelButton } = setup();
    userEvent.click(getEditButton());
    const textarea = getTextarea();
    userEvent.type(textarea, ' something that should be reset');
    userEvent.click(getCancelButton());
    expect(textarea).toHaveValue(title);
    expect(textarea).toBeDisabled();
  });

  describe('test passed functions to be called on events', () => {
    it('should call onDelete', () => {
      const { id, onDelete, getDeleteButton } = setup();
      userEvent.click(getDeleteButton());
      expect(onDelete).toBeCalledWith(id);
    });

    it('should call onEdit with typed value', () => {
      const {
        id,
        onEdit,
        getEditButton,
        getTextarea,
        getSubmitButton,
      } = setup();

      userEvent.click(getEditButton());
      const typedValue = 'shh...';
      userEvent.type(getTextarea(), typedValue);
      userEvent.click(getSubmitButton());
      expect(onEdit).toBeCalledWith(id, typedValue);
    });
  });
});
