import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppState } from 'utils';
import List, { ListProps } from './List';
import { BrowserRouter } from 'react-router-dom';

describe('Test list view', () => {
  const setup = () => {
    const props: ListProps = {
      index: 0,
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
      <BrowserRouter>
        <Provider store={store}>
          <DragDropContext onDragEnd={() => {}}>
            {/* Have to provide droppable and parent element with provided ref to avoid errors */}
            <Droppable droppableId="lists" direction="horizontal" type="list">
              {provided => (
                <div ref={provided.innerRef}>
                  <List {...props} />
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Provider>
      </BrowserRouter>
    );

    return {
      textarea: screen.getAllByRole('textbox')[0],
      // Component also renders list of cards with "New Card" component
      // which has its own Edit button
      getEditButton: () => screen.getAllByRole('button', { name: 'Edit' })[0],
      getDeleteButton: () => screen.getByRole('button', { name: 'Delete' }),
      getSubmitButton: () => screen.getByRole('button', { name: 'Submit' }),
      getCancelButton: () => screen.getByRole('button', { name: 'Cancel' }),
      ...props,
    };
  };

  it('should render disabled textarea with given title', () => {
    const { textarea } = setup();
    expect(textarea).toBeInTheDocument();
  });

  it('should enable textarea on edit click', () => {
    const { textarea, getEditButton } = setup();
    userEvent.click(getEditButton());
    expect(textarea).toBeEnabled();
  });

  it('should reset typed title and disable textarea on cancel click', () => {
    const { title, textarea, getEditButton, getCancelButton } = setup();
    userEvent.click(getEditButton());
    userEvent.type(textarea, ' something that should be reset');
    userEvent.click(getCancelButton());
    expect(textarea).toHaveValue(title);
    expect(textarea).toBeDisabled();
  });

  describe('test passed functions to be called on events', () => {
    it('should call onDelete', () => {
      const { id, onDelete, getEditButton, getDeleteButton } = setup();
      userEvent.click(getEditButton());
      userEvent.click(getDeleteButton());
      expect(onDelete).toBeCalledWith(id);
    });

    it('should call onEdit with typed value', () => {
      const { id, onEdit, textarea, getEditButton, getSubmitButton } = setup();

      userEvent.click(getEditButton());
      const typedValue = 'shh...';
      userEvent.type(textarea, typedValue);
      userEvent.click(getSubmitButton());
      expect(onEdit).toBeCalledWith(id, typedValue);
    });
  });
});
