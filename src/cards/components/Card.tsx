import React, { FC, ReactElement, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { useToggle } from 'utils';
import { AppState } from 'app/types';
import { FieldEditor } from 'shared';
import './Card.scss';

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
  const [shouldDrag, toggleShouldDrag] = useToggle(true);

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
            className="cards__card"
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
              textareaClassName="cards__card-textarea"
            />
          </div>
        )
      }
    </Draggable>
  );
};

export default memo(Card);
