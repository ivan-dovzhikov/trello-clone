import React from 'react';
import BoardsNavigation from './Presentational';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('Test presentational boards navigation component', () => {
  const setup = () => {
    const history = createMemoryHistory();
    const props = {
      boards: [
        {
          id: '1',
          title: 'first board',
        },
        {
          id: '2',
          title: 'second board',
        },
      ],
      onDelete: jest.fn(),
      onCreate: jest.fn(),
      onEdit: jest.fn(),
    };
    render(
      <Router history={history}>
        <BoardsNavigation {...props} />
      </Router>
    );

    return {
      list: screen.getByRole('list'),
      ...props,
    };
  };

  it('should render list', () => {
    const { list } = setup();
    expect(list).toBeInTheDocument();
  });

  it('should display each title as a link', () => {
    const { boards } = setup();
    boards.forEach(({ title }) => {
      expect(
        // Field name passed to FieldEditor also goes to link accessible name
        // so query have to find the name by substring
        screen.getByRole('link', { name: new RegExp(title) })
      ).toBeInTheDocument();
    });
  });

  it('should render New Board button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: 'New Board' })
    ).toBeInTheDocument();
  });
});
