import React, { FC, WheelEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { HORIZONTAL_SCROLLING_SPEED_FACTOR, AppState } from 'utils';
import { createBoard, deleteBoard, changeBoard } from '../actions';
import BoardLink from './BoardLink';
import NewBoard from './NewBoard';
import './BoardsNavigation.scss';

const BoardsNavigation: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const boardsIds = useSelector<AppState, string[]>(
    ({ boards }) => boards.allIds
  );

  const onCreate = useCallback(
    (title: string) => dispatch(createBoard(title)),
    [dispatch]
  );

  const onDelete = useCallback(
    (boardId: string) => {
      if (history.location.pathname.includes(boardId)) history.push('/boards/');
      dispatch(deleteBoard(boardId));
    },
    [dispatch, history]
  );

  const onEdit = useCallback(
    (boardId: string, newTitle: string) => {
      dispatch(changeBoard(boardId, newTitle));
    },
    [dispatch]
  );

  const onWheel = ({
    target,
    currentTarget,
    deltaY,
  }: WheelEvent<HTMLDivElement>) => {
    if ((target as HTMLElement)?.closest('.field-editor--edit')) return;
    currentTarget.scrollTo({
      left:
        currentTarget.scrollLeft + deltaY * HORIZONTAL_SCROLLING_SPEED_FACTOR,
    });
  };

  return (
    <nav className="boards-navigation" onWheel={onWheel}>
      <ul className="boards-navigation__list">
        {boardsIds.map(id => (
          <li key={id}>
            <BoardLink id={id} onDelete={onDelete} onEdit={onEdit} />
          </li>
        ))}
      </ul>
      <NewBoard onCreate={onCreate} />
    </nav>
  );
};

export default BoardsNavigation;
