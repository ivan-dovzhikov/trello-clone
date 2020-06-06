import React from 'react';
import BoardPage from '.';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

describe('Test list of lists component', () => {
  const setup = () => {
    const history = createMemoryHistory();
    const props = {
      lists: [
        {
          id: '1',
          title: 'first list',
        },
        {
          id: '2',
          title: 'second list',
        },
      ],
      onDelete: jest.fn(),
      onCreate: jest.fn(),
      onEdit: jest.fn(),
    };
    render(
      <Router history={history}>
        <BoardPage {...props} />
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

  it('should display each title', () => {
    const { lists } = setup();
    const listItems = screen.getAllByRole('listitem');
    lists.forEach(({ title }, index) => {
      expect(listItems[index]).toHaveTextContent(title);
    });
  });

  it('should render New List button', () => {
    setup();
    expect(
      screen.getByRole('button', { name: 'New List' })
    ).toBeInTheDocument();
  });
});
