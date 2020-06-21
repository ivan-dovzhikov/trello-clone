import React, { FC, useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { FieldEditor } from 'shared';
import { useSelector } from 'react-redux';
import { AppState } from 'utils';
import { useIntl } from 'react-intl';

export interface BoardLinkProps {
  id: string;
  onEdit: (id: string, newTitle: string) => any;
  onDelete: (id: string) => any;
}

const BoardLink: FC<BoardLinkProps> = ({ id, onEdit, onDelete }) => {
  const intl = useIntl();

  const title = useSelector<AppState, string>(
    ({ boards }) => boards.byId[id].title
  );

  const [editMode, setEditMode] = useState(false);
  const toggleEdit = () => setEditMode(!editMode);

  const FieldEditProps = {
    fieldName: intl.formatMessage({
      id: 'boards/title',
      defaultMessage: 'Title',
    }),
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

export default memo(BoardLink);
