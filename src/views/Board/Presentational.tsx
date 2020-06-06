import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import Lists from 'components/Lists/';
import { connector } from './Container';

type BoardProps = ConnectedProps<typeof connector>;

const Board: FC<BoardProps> = ({
  boardExist,
  lists,
  onCreate,
  onDelete,
  onEdit,
}) => {
  if (boardExist) {
    return (
      <Lists
        lists={lists}
        onCreate={onCreate}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  } else return <h2>No such board</h2>;
};

export default Board;
