import React, { FC } from 'react';
import './styles.scss';
import BoardsList from 'components/Boards';

const BoardsPage: FC = () => {
  return (
    <main className="boards-page">
      <BoardsList />
    </main>
  );
};

export default BoardsPage;
