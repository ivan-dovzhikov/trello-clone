import React, { FC, memo } from 'react';
import { FieldEditor } from 'shared';

export interface NewBoardProps {
  onCreate: (title: string) => any;
}

const NewBoard: FC<NewBoardProps> = ({ onCreate }) => {
  return (
    <div>
      <div className="board-link new-board">
        <FieldEditor
          fieldName="Title"
          displayOnViewMode="New Board"
          onSubmit={onCreate}
        />
      </div>
    </div>
  );
};

export default memo(NewBoard);
