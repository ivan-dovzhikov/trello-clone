import React, { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import ListOfCard from 'cards';

export interface ListProps {
  index: number;
  id: string;
  title: string;
  onEdit: (listId: string, newTitle: string) => any;
  onDelete: (listId: string) => any;
}

const List: FC<ListProps> = ({ index, id, title, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newTitle: string) => onEdit(id, newTitle);

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          className="list"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <header>
            <FieldEditor
              editMode={editMode}
              fieldName="Title"
              value={title}
              onDelete={handleDelete}
              onSubmit={handleSubmit}
              onEditToggle={toggleEdit}
            />
          </header>
          <ListOfCard listId={id} />
        </div>
      )}
    </Draggable>
  );
};

export default List;
