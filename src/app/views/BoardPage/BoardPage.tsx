import React, { FC, WheelEvent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { HORIZONTAL_SCROLLING_SPEED_FACTOR, AppState } from 'utils';
import './BoardPage.scss';
import ListOfLists from 'lists';
import NotFoundPage from 'app/views/NotFoundPage/NotFoundPage';

export interface BoardPageProps extends RouteComponentProps<{ id: string }> {}

const BoardPage: FC<BoardPageProps> = ({ match }) => {
  const intl = useIntl();

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
      if (window.innerHeight <= 600) return;
      if ((target as HTMLElement)?.closest('.lists__list')) return;
      currentTarget.scrollTo({
        left:
          currentTarget.scrollLeft + deltaY * HORIZONTAL_SCROLLING_SPEED_FACTOR,
      });
    };

    return (
      <main className="board-page" onWheel={onWheel}>
        <ListOfLists boardId={boardId} />
      </main>
    );
  } else
    return (
      <NotFoundPage
        message={intl.formatMessage({
          id: 'app/board404',
          defaultMessage: "Such board doesn't exist",
        })}
      />
    );
};

export default BoardPage;
