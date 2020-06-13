import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import { render, screen } from '@testing-library/react';
import ListOfLists, { ListOfCardsProps } from './ListOfCards';
import { v4 } from 'uuid';

describe('Test Card component', () => {
  const setup = () => {
    const props: ListOfCardsProps = {
      droppableId: v4(),
      cards: [
        { id: v4(), content: 'card 1' },
        { id: v4(), content: 'card 2' },
        { id: v4(), content: 'card 3' },
      ],
      onCreate: jest.fn(),
      onDelete: jest.fn(),
      onEdit: jest.fn(),
    };

    render(
      <BrowserRouter>
        <DragDropContext onDragEnd={() => {}}>
          <ListOfLists {...props} />
        </DragDropContext>
      </BrowserRouter>
    );

    return props;
  };

  it('should render list', () => {
    setup();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render each card', () => {
    const { cards } = setup();

    cards.forEach(card => {
      expect(screen.getByText(card.content)).toBeInTheDocument();
    });
  });
});
