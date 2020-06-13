import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import { connector } from './BoardsNavigationContainer';
import BoardLink from './BoardLink';
import NewBoard from './NewBoard';
import { useHistory } from 'react-router-dom';

export type BoardsNavigationProps = ConnectedProps<typeof connector>;

const BoardsNavigation: FC<BoardsNavigationProps> = ({
  boards,
  onCreate,
  onDelete,
  onEdit,
}) => {
  const history = useHistory();
  const handleDelete = (id: string) => {
    if (history.location.pathname.includes(id)) history.push('/boards/');
    onDelete(id);
  };

  return (
    <nav className="boards-navigation">
      <ul>
        {boards.map(({ id, title }) => (
          <li key={id}>
            <BoardLink
              id={id}
              title={title}
              onDelete={handleDelete}
              onEdit={onEdit}
            />
          </li>
        ))}
      </ul>
      <NewBoard onCreate={onCreate} />
    </nav>
  );
};

export default BoardsNavigation;
