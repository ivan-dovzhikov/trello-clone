import React from 'react';
import Card, { CardProps } from './Card';
import { BrowserRouter } from 'react-router-dom';
import { Droppable, DragDropContext } from 'react-beautiful-dnd';
import { render, screen } from '@testing-library/react';

describe('Test Card component', () => {
  const setup = () => {
    const props: CardProps = {
      index: 0,
      id: '0',
      content: 'card test',
      onDelete: jest.fn(),
      onEdit: jest.fn(),
    };

    render(
      <BrowserRouter>
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="cards">
            {({ innerRef }) => (
              <div ref={innerRef}>
                <Card {...props} />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </BrowserRouter>
    );

    return {
      textarea: screen.getByRole('textbox'),
      ...props,
    };
  };

  it('should render textarea', () => {
    const { textarea } = setup();
    expect(textarea).toBeInTheDocument();
  });

  it('should render textarea with given content', () => {
    const { textarea, content } = setup();
    expect(textarea).toHaveValue(content);
  });
});
