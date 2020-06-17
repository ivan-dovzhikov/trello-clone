import React, { FC, useState, ReactElement } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import { createPortal } from 'react-dom';

export interface CardProps {
  index: number;
  id: string;
  content: string;
  onDelete: (id: string) => any;
  onEdit: (id: string, newContent: string) => any;
}

const optionalPortal = (style: any, element: ReactElement): ReactElement => {
  if (style.position !== 'fixed') return element;
  return createPortal(element, document.getElementById('draggable')!);
};

const Card: FC<CardProps> = ({ index, id, content, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newContent: string) => onEdit(id, newContent);

  return (
    <Draggable draggableId={id} index={index}>
      {provided =>
        optionalPortal(
          provided.draggableProps.style,
          <div
            className={`card${editMode ? ' edit' : ''}`}
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
        )
      }
    </Draggable>
  );
};

export default Card;
