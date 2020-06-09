import React, { FC, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { FieldEditor } from 'shared';
import './styles.scss';
import CardsList from 'components/Cards/';

interface ListViewProps {
  id: string;
  title: string;
  onEdit: (listId: string, newTitle: string) => any;
  onDelete: (listId: string) => any;
}

export const ListView: FC<ListViewProps> = ({
  id,
  title,
  onEdit,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);
  const handleDelete = () => onDelete(id);
  const handleSubmit = (newTitle: string) => onEdit(id, newTitle);

  return (
    <div className="list">
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
      <Droppable droppableId={id}>
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <CardsList listId={id} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
