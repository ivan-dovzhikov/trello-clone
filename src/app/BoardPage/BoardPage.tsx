import React, { FC } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { ConnectedProps } from 'react-redux';
import { connector } from './BoardPageContainer';
import './styles.scss';
import Lists from 'lists/';

type BoardProps = ConnectedProps<typeof connector>;

const Board: FC<BoardProps> = ({
  boardExist,
  lists,
  onCreate,
  onDelete,
  onEdit,
  onCardMove,
  onListMove,
}) => {
  if (boardExist) {
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
        onListMove(source.index, destination.index);
      }
    };

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lists" direction="horizontal" type="list">
          {provided => (
            <div
              className="board-page"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <Lists
                lists={lists}
                onCreate={onCreate}
                onDelete={onDelete}
                onEdit={onEdit}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  } else return <h2>No such board</h2>;
};

export default Board;
