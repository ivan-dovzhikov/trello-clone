import React, { FC } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { ConnectedProps } from 'react-redux';
import { connector } from './BoardPageContainer';
import './styles.scss';
import ListOfLists from 'lists';

type BoardPageProps = ConnectedProps<typeof connector>;

const BoardPage: FC<BoardPageProps> = ({
  boardExist,
  lists,
  onListCreate,
  onListDelete,
  onListEdit,
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
        if (source.index === destination.index) return;

        onListMove(source.index, destination.index);
      }
    };

    return (
      <main className="board-page">
        <DragDropContext onDragEnd={onDragEnd}>
          <ListOfLists
            lists={lists}
            onCreate={onListCreate}
            onDelete={onListDelete}
            onEdit={onListEdit}
          />
        </DragDropContext>
      </main>
    );
  } else return <h2>No such board</h2>;
};

export default BoardPage;
