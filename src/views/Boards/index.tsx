import React, { FC } from 'react';
import './styles.scss';
import BoardsNavigation from 'components/Boards';

const BoardsPage: FC = () => {
  return (
    <main className="boards-page">
      <BoardsNavigation />
    </main>
  );
};

export default BoardsPage;
