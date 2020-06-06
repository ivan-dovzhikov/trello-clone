import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

interface ListCreateProps {
  onCreate: (title: string) => any;
}

export const ListCreate: FC<ListCreateProps> = ({ onCreate }) => {
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
