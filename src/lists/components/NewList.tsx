import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

export interface NewListProps {
  onCreate: (title: string) => any;
}

const NewList: FC<NewListProps> = ({ onCreate }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);

  return editMode ? (
    <div className="list">
      <FieldEditor
        editMode={true}
        fieldName="Title"
        onEditToggle={toggleEdit}
        onSubmit={onCreate}
      />
    </div>
  ) : (
    <button className="list" onClick={toggleEdit}>
      New List
    </button>
  );
};

export default NewList;
