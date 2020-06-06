import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';
import './styles.scss';

interface ListViewProps {
  title: string;
  onEdit: (newTitle: string) => any;
  onDelete: () => any;
}

export const ListView: FC<ListViewProps> = ({ title, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);

  return (
    <div className="list">
      <header>
        <FieldEditor
          editMode={editMode}
          fieldName="Title"
          value={title}
          onSubmit={onEdit}
          onDelete={onDelete}
          onEditToggle={toggleEdit}
        />
      </header>
    </div>
  );
};
