import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ConnectedProps } from 'react-redux';
import { connector } from './ListOfCardsContainer';
import Card from './Card';
import NewCard from './NewCard';

export type ListOfCardsProps = ConnectedProps<typeof connector>;

const ListOfCards: FC<ListOfCardsProps> = ({
  droppableId,
  cards = [],
  onCreate,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <Droppable droppableId={droppableId} type="card">
        {provided => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list-of-cards"
          >
            {cards.map(({ id, content }, index) => (
              <li key={id}>
                <Card
                  index={index}
                  id={id}
                  content={content}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              </li>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <NewCard onCreate={onCreate} />
    </>
  );
};

export default ListOfCards;
