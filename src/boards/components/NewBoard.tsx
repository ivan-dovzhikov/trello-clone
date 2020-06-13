import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

interface NewBoardProps {
  onCreate: (title: string) => any;
}

const NewBoard: FC<NewBoardProps> = ({ onCreate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleShowEdit = () => setShowEdit(!showEdit);

  return showEdit ? (
    <div className="board-panel">
      <FieldEditor
        fieldName="Title"
        editMode={true}
        onSubmit={onCreate}
        onEditToggle={toggleShowEdit}
      />
    </div>
  ) : (
    <button className="board-panel" onClick={toggleShowEdit}>
      New Board
    </button>
  );
};

export default NewBoard;
