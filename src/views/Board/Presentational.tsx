import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Lists from 'components/Lists/';
import { connector } from './Container';

type BoardProps = ConnectedProps<typeof connector>;

const Board: FC<BoardProps> = ({
  boardExist,
  lists,
  onCreate,
  onDelete,
  onEdit,
  onMove,
}) => {
  if (boardExist) {
    const onDragEnd = (result: DropResult) => {
      const { destination, source } = result;

      if (!destination) return;
      const { droppableId: fromListId, index: fromIndex } = source;
      const { droppableId: toListId, index: toIndex } = destination;

      if (fromListId === toListId && fromIndex === toIndex) {
        return;
      }

      onMove(fromListId, toListId, fromIndex, toIndex);
    };

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Lists
          lists={lists}
          onCreate={onCreate}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </DragDropContext>
    );
  } else return <h2>No such board</h2>;
};

export default Board;
