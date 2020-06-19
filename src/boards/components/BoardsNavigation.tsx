import React, { FC, WheelEvent } from 'react';
import { ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HORIZONTAL_SCROLLING_SPEED_FACTOR } from 'utils';
import { connector } from './BoardsNavigationContainer';
import BoardLink from './BoardLink';
import NewBoard from './NewBoard';

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

  const onWheel = ({
    target,
    currentTarget,
    deltaY,
  }: WheelEvent<HTMLDivElement>) => {
    if ((target as HTMLElement)?.closest('.field-editor.edit')) return;
    currentTarget.scrollTo({
      left: currentTarget.scrollLeft +=
        deltaY * HORIZONTAL_SCROLLING_SPEED_FACTOR,
    });
  };

  return (
    <nav className="boards-navigation" onWheel={onWheel}>
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
