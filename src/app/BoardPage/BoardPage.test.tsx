import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { AppState } from 'utils';
import BoardPage from './BoardPage';

describe('Test presentational board page component', () => {
  const setup = (boardExist: boolean) => {
    const history = createMemoryHistory();
    const props = {
      boardExist,
      lists: [
        { id: '1', title: 'first list', cards: [] },
        { id: '2', title: 'second list', cards: [] },
        { id: '3', title: 'third list', cards: [] },
      ],
      onListCreate: jest.fn(),
      onListDelete: jest.fn(),
      onListEdit: jest.fn(),
      onCardMove: jest.fn(),
      onListMove: jest.fn(),
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
          <BoardPage {...props} />
        </Provider>
      </Router>
    );

    return props;
  };

  describe('board exist', () => {
    it('should render list', () => {
      setup(true);
      expect(screen.getAllByRole('list')[0]).toBeInTheDocument();
    });

    it('should not render 404 message', () => {
      setup(true);
      expect(
        screen.queryByRole('heading', { name: 'No such board' })
      ).not.toBeInTheDocument();
    });
  });

  describe("board doesn't exist", () => {
    it('should render 404 message', () => {
      setup(false);
      expect(
        screen.getByRole('heading', { name: 'No such board' })
      ).toBeInTheDocument();
    });

    it('should not render list', () => {
      setup(false);
      expect(screen.queryByRole('list')).not.toBeInTheDocument();
    });
  });
});
