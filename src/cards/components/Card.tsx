import React, { FC, ReactElement, useState, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState } from 'utils';

export interface CardProps {
  index: number;
  id: string;
  onDelete: (id: string) => any;
  onEdit: (id: string, newContent: string) => any;
}

const optionalPortal = (style: any, element: ReactElement): ReactElement => {
  if (style.position !== 'fixed') return element;
  return createPortal(element, document.getElementById('draggable')!);
};

const Card: FC<CardProps> = ({ index, id, onDelete, onEdit }) => {
  const intl = useIntl();

  const content = useSelector<AppState, string>(
    ({ cards }) => cards[id].content
  );

  const handleDelete = () => onDelete(id);
  const handleSubmit = (newContent: string) => onEdit(id, newContent);

  // Caret insert in edit mode won't work if disableInteractiveElementBlocking
  // will be enabled
  const [shouldDrag, setShouldDrag] = useState(true);
  const toggleShouldDrag = () => setShouldDrag(!shouldDrag);

  return (
    <Draggable
      draggableId={id}
      index={index}
      disableInteractiveElementBlocking={shouldDrag}
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
              fieldName={intl.formatMessage({
                id: 'cards/content',
                defaultMessage: 'Content',
              })}
              value={content}
              onSubmit={handleSubmit}
              onDelete={handleDelete}
              onEditToggle={toggleShouldDrag}
            />
          </div>
        )
      }
    </Draggable>
  );
};

export default memo(Card);
