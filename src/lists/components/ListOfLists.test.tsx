import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { render, screen } from '@testing-library/react';
import { AppState } from 'utils';
import ListOfLists, { ListOfListsProps } from './ListOfLists';

describe('Test list of lists component', () => {
  const setup = () => {
    const history = createMemoryHistory();
    const lists = [
      {
        id: '1',
        title: 'first list',
        cards: [],
      },
      {
        id: '2',
        title: 'second list',
        cards: [],
      },
    ];
    const props: ListOfListsProps = {
      lists,
      onDelete: jest.fn(),
      onCreate: jest.fn(),
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
          <DragDropContext onDragEnd={() => {}}>
            <ListOfLists {...props} />
          </DragDropContext>
        </Provider>
      </Router>
    );

    return {
      list: screen.getAllByRole('list')[0],
      ...props,
    };
  };

  it('should render list', () => {
    const { list } = setup();
    expect(list).toBeInTheDocument();
  });

  it('should display each title', () => {
    const { lists } = setup();
    lists.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('should render New List button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: 'New List' })
    ).toBeInTheDocument();
  });
});
