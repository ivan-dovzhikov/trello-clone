import React, { FC, memo, useCallback } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from 'app/types';
import { createList, deleteList, changeList, moveCard } from '../actions';
import { moveList } from 'boards/actions';
import List from './List';
import NewList from './NewList';
import './ListOfLists.scss';

export interface ListOfListsProps {
  boardId: string;
}

const ListOfLists: FC<ListOfListsProps> = ({ boardId }) => {
  const lists = useSelector<AppState, string[]>(
    ({ boards }) => boards.byId[boardId]?.lists || []
  );

  const dispatch = useDispatch();

  const onCreate = useCallback(
    (title: string) => dispatch(createList(boardId, title)),
    [dispatch, boardId]
  );

  const onDelete = useCallback(
    (listId: string) => dispatch(deleteList(boardId, listId)),
    [boardId, dispatch]
  );

  const onEdit = useCallback(
    (listId: string, title: string) => dispatch(changeList(listId, title)),
    [dispatch]
  );

  const onListMove = useCallback(
    (fromIndex: number, toIndex: number) =>
      dispatch(moveList(boardId, fromIndex, toIndex)),
    [dispatch, boardId]
  );

  const onCardMove = useCallback(
    (
      fromListId: string,
      toListId: string,
      fromIndex: number,
      toIndex: number
    ) => dispatch(moveCard(fromListId, toListId, fromIndex, toIndex)),
    [dispatch]
  );

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    if (!destination) return;

    if (type === 'card') {
      const { droppableId: fromListId, index: fromIndex } = source;
      const { droppableId: toListId, index: toIndex } = destination;

      if (fromListId === toListId && fromIndex === toIndex) {
        return;
      }

      onCardMove(fromListId, toListId, fromIndex, toIndex);
    } else if (type === 'list') {
      if (source.index === destination.index) return;

      onListMove(source.index, destination.index);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="lists">
        <Droppable droppableId="lists" direction="horizontal" type="list">
          {provided => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="lists__ul"
            >
              {lists.map((id, index) => (
                <li key={id} className="lists__ul-item">
                  <List
                    index={index}
                    id={id}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                </li>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <NewList onCreate={onCreate} />
      </div>
    </DragDropContext>
  );
};

export default memo(ListOfLists);
