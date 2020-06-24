import React, { FC, memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import ListOfCard from 'cards';
import { useSelector } from 'react-redux';
import { AppState, useToggle } from 'utils';
import { useIntl } from 'react-intl';

export interface ListProps {
  index: number;
  id: string;
  onEdit: (listId: string, newTitle: string) => any;
  onDelete: (listId: string) => any;
}

const List: FC<ListProps> = ({ index, id, onEdit, onDelete }) => {
  const intl = useIntl();

  const title = useSelector<AppState, string>(({ lists }) => lists[id].title);

  const handleDelete = () => onDelete(id);
  const handleSubmit = (newTitle: string) => onEdit(id, newTitle);

  // Caret insert in edit mode won't work if disableInteractiveElementBlocking
  // will be enabled
  const [shouldDrag, toggleShouldDrag] = useToggle(true);

  return (
    <Draggable
      draggableId={id}
      index={index}
      disableInteractiveElementBlocking={shouldDrag}
    >
      {provided => (
        <div
          className="list"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header>
            <FieldEditor
              fieldName={intl.formatMessage({
                id: 'lists/title',
                defaultMessage: 'Title',
              })}
              value={title}
              onDelete={handleDelete}
              onSubmit={handleSubmit}
              onEditToggle={toggleShouldDrag}
            />
          </header>
          <ListOfCard listId={id} />
        </div>
      )}
    </Draggable>
  );
};

export default memo(List);
