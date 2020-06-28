import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState, preventDefault, useToggle } from 'utils';
import { FieldEditor } from 'shared';
import './BoardLink.scss';

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

  const [editMode, toggleEditMode] = useToggle(false);

  const handleSubmit = (newTitle: string) => onEdit(id, newTitle);
  const handleDelete = () => onDelete(id);

  return (
    <NavLink
      to={`/boards/${id}`}
      className="boards-navigation__link"
      onClick={editMode ? preventDefault : undefined}
    >
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'boards/title',
          defaultMessage: 'Title',
        })}
        value={title}
        iconToggle={true}
        onEditToggle={toggleEditMode}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        textareaClassName="boards-navigation__link-textarea"
      />
    </NavLink>
  );
};

export default memo(BoardLink);
