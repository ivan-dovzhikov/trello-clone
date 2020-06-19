import React, { FC, useCallback, memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { createCard, deleteCard, changeCard } from '../actions';
import Card from './Card';
import NewCard from './NewCard';
import { AppState } from 'utils';

export interface ListOfCardsProps {
  listId: string;
}

const ListOfCards: FC<ListOfCardsProps> = ({ listId }) => {
  const dispatch = useDispatch();

  const cardsIds = useSelector<AppState, string[]>(
    ({ lists }) => lists[listId]?.cards || []
  );

  const onCreate = useCallback(
    (content: string) => dispatch(createCard(listId, content)),
    [dispatch, listId]
  );

  const onDelete = useCallback(
    (cardId: string) => dispatch(deleteCard(listId, cardId)),
    [dispatch, listId]
  );

  const onEdit = useCallback(
    (cardId: string, content: string) => dispatch(changeCard(cardId, content)),
    [dispatch]
  );

  return (
    <>
      <Droppable droppableId={listId} type="card">
        {provided => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="list-of-cards"
          >
            {cardsIds.map((id, index) => (
              <li key={id}>
                <Card
                  index={index}
                  id={id}
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

export default memo(ListOfCards);
