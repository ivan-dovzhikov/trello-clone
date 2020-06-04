import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FieldEditor } from 'shared';
import './styles.scss';

interface BoardPanelLinkProps {
  id: string;
  title: string;
  onEdit: (id: string, newTitle: string) => any;
  onDelete: (id: string) => any;
}

export const BoardPanelLink: FC<BoardPanelLinkProps> = ({
  id,
  title,
  onEdit,
  onDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);

  const props = {
    fieldName: 'Title',
    value: title,
    editMode,
    onSubmit: (newTitle: string) => onEdit(id, newTitle),
    onDelete: () => onDelete(id),
    onEditToggle: toggleEdit,
  };

  return editMode ? (
    <div className="board-panel">
      <FieldEditor {...props} />
    </div>
  ) : (
    <NavLink to={`/boards/${id}`} className="board-panel">
      <FieldEditor {...props} />
    </NavLink>
  );
};
