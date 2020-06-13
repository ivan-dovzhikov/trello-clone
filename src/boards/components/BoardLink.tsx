import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FieldEditor } from 'shared';

interface BoardLinkProps {
  id: string;
  title: string;
  onEdit: (id: string, newTitle: string) => any;
  onDelete: (id: string) => any;
}

const BoardLink: FC<BoardLinkProps> = ({ id, title, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);

  const FieldEditProps = {
    fieldName: 'Title',
    value: title,
    editMode,
    onSubmit: (newTitle: string) => onEdit(id, newTitle),
    onDelete: () => onDelete(id),
    onEditToggle: toggleEdit,
  };

  return editMode ? (
    <div className="board-panel">
      <FieldEditor {...FieldEditProps} />
    </div>
  ) : (
    <NavLink to={`/boards/${id}`} className="board-panel">
      <FieldEditor {...FieldEditProps} />
    </NavLink>
  );
};

export default BoardLink;
