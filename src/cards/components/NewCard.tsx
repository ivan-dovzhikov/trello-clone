import React, { FC, useState, memo } from 'react';
import { FieldEditor } from 'shared';

export interface NewCardProps {
  onCreate: (content: string) => any;
}

const NewCard: FC<NewCardProps> = ({ onCreate }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEditMode = () => setEditMode(!editMode);

  return (
    <div className="card new-card">
      <FieldEditor
        fieldName="Text"
        editMode={editMode}
        displayOnViewMode="New Card"
        onEditToggle={toggleEditMode}
        onSubmit={onCreate}
      />
    </div>
  );
};

export default memo(NewCard);
