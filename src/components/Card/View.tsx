import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';

interface CardViewProps {
  id: string;
  content: string;
  onDelete: (id: string) => any;
  onEdit: (id: string, newContent: string) => any;
}

export const CardView: FC<CardViewProps> = ({
  id,
  content,
  onDelete,
  onEdit,
}) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newContent: string) => onEdit(id, newContent);

  return (
    <div className={editMode ? 'card edit' : 'card'}>
      <FieldEditor
        fieldName="Text"
        value={content}
        editMode={editMode}
        onEditToggle={toggleEdit}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </div>
  );
};
