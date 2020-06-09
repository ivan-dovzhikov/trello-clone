import React, { FC, useState } from 'react';
import { FieldEditor } from 'shared';
import { Draggable } from 'react-beautiful-dnd';

interface CardViewProps {
  index: number;
  id: string;
  content: string;
  onDelete: (id: string) => any;
  onEdit: (id: string, newContent: string) => any;
}

export const CardView: FC<CardViewProps> = ({
  index,
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
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className={editMode ? 'card edit' : 'card'}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <FieldEditor
            fieldName="Text"
            value={content}
            editMode={editMode}
            onEditToggle={toggleEdit}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </Draggable>
  );
};
