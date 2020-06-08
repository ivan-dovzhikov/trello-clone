import React from 'react';
import BoardPage from './Presentational';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

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
      onCreate: jest.fn(),
      onDelete: jest.fn(),
      onEdit: jest.fn(),
    };

    render(
      <Router history={history}>
        <BoardPage {...props} />
      </Router>
    );

    return props;
  };

  describe('board exist', () => {
    it('should render list', () => {
      setup(true);
      expect(screen.getByRole('list')).toBeInTheDocument();
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
