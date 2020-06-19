import React, { FC, ReactElement, useState } from 'react';
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
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newContent: string) => onEdit(id, newContent);

  // Caret insert in edit mode won't work if disableInteractiveElementBlocking
  // will be enabled
  const [textareaDrag, setTextareaDrag] = useState(true);
  const toggleTextareaDrag = () => setTextareaDrag(!textareaDrag);

  return (
    <Draggable
      draggableId={id}
      index={index}
      disableInteractiveElementBlocking={textareaDrag}
    >
      {provided =>
        optionalPortal(
          provided.draggableProps.style,
          <div
            className="card"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <FieldEditor
              fieldName="Text"
              value={content}
              onSubmit={handleSubmit}
              onDelete={handleDelete}
              onEditToggle={toggleTextareaDrag}
            />
          </div>
        )
      }
    </Draggable>
  );
};

export default Card;
