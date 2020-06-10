import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

interface CardCreateProps {
  onCreate: (content: string) => any;
}

const NewCard: FC<CardCreateProps> = ({ onCreate }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  return editMode ? (
    <div className="card">
      <FieldEditor
        fieldName="text"
        editMode={editMode}
        onEditToggle={toggleEditMode}
        onSubmit={onCreate}
      />
    </div>
  ) : (
    <button className="card" onClick={toggleEditMode}>
      New Card
    </button>
  );
};

export default NewCard;
