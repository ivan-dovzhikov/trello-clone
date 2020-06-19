import React from 'react';
import BoardsNavigation, { BoardsNavigationProps } from './BoardsNavigation';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Test presentational boards navigation component', () => {
  const setup = () => {
    const props: BoardsNavigationProps = {
      boards: [
        {
          id: '1',
          title: 'first board',
          lists: [],
        },
        {
          id: '2',
          title: 'second board',
          lists: [],
        },
      ],
      onDelete: jest.fn(),
      onCreate: jest.fn(),
      onEdit: jest.fn(),
    };

    render(
      <BrowserRouter>
        <BoardsNavigation {...props} />
      </BrowserRouter>
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
    expect(screen.getByText('New Board')).toBeInTheDocument();
  });
});
