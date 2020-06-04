import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import './styles.scss';
import { connector } from './Container';
import { BoardPanelLink, BoardPanelCreate } from 'components/BoardPanel';
import { useHistory } from 'react-router-dom';

type BoardsNavigationProps = ConnectedProps<typeof connector>;
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
            {
              <BoardPanelLink
                id={id}
                title={title}
                onDelete={handleDelete}
                onEdit={onEdit}
              />
            }
          </li>
        ))}
        <li>
          <BoardPanelCreate onCreate={onCreate} />
        </li>
      </ul>
    </nav>
  );
};

export default BoardsNavigation;
