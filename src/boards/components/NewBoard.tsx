import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

export interface NewBoardProps {
  onCreate: (title: string) => any;
}

const NewBoard: FC<NewBoardProps> = ({ onCreate }) => {
  const [showEdit, setShowEdit] = useState(false);
  const toggleShowEdit = () => setShowEdit(!showEdit);

  return showEdit ? (
    <div className="new-board">
      <FieldEditor
        fieldName="Title"
        editMode={true}
        onSubmit={onCreate}
        onEditToggle={toggleShowEdit}
      />
    </div>
  ) : (
    <button className="new-board" onClick={toggleShowEdit}>
      New Board
    </button>
  );
};

export default NewBoard;
