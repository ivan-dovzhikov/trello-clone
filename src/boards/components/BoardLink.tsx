import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FieldEditor } from 'shared';

export interface BoardLinkProps {
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
    useIconToggler: true,
    editMode,
    onEditToggle: toggleEdit,
    onSubmit: (newTitle: string) => onEdit(id, newTitle),
    onDelete: () => onDelete(id),
  };

  return editMode ? (
    <div className="board-link">
      <FieldEditor {...FieldEditProps} />
    </div>
  ) : (
    <NavLink to={`/boards/${id}`} className="board-link">
      <FieldEditor {...FieldEditProps} />
    </NavLink>
  );
};

export default BoardLink;
