import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { AppState } from 'utils';
import BoardPage, { BoardPageProps } from './BoardPage';
import { BrowserRouter } from 'react-router-dom';

describe('Test presentational board page component', () => {
  const setup = (boardExist: boolean) => {
    const props: BoardPageProps = {
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
      <BrowserRouter>
        <Provider store={store}>
          <BoardPage {...props} />
        </Provider>
      </BrowserRouter>
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
