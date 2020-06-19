import React, { FC, WheelEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HORIZONTAL_SCROLLING_SPEED_FACTOR, AppState } from 'utils';
import './styles.scss';
import ListOfLists from 'lists';
import NotFoundPage from 'app/NotFoundPage/NotFoundPage';

export interface BoardPageProps extends RouteComponentProps<{ id: string }> {}

const BoardPage: FC<BoardPageProps> = ({ match }) => {
  const boardId = match.params.id;
  const boardExist = useSelector<AppState, boolean>(
    state => !!state.boards.byId[boardId]
  );

  if (boardExist) {
    const onWheel = ({
      target,
      currentTarget,
      deltaY,
    }: WheelEvent<HTMLDivElement>) => {
      if ((target as HTMLElement)?.closest('.list')) return;
      currentTarget.scrollTo({
        left: currentTarget.scrollLeft +=
          deltaY * HORIZONTAL_SCROLLING_SPEED_FACTOR,
        behavior: 'smooth',
      });
    };

    return (
      <main className="board-page" onWheel={onWheel}>
        <ListOfLists boardId={boardId} />
      </main>
    );
  } else return <NotFoundPage message="Such board doesn't exist!" />;
};

export default BoardPage;
