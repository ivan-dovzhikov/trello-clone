import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import './styles.scss';
import BoardsNavigation from 'components/Boards';
import Board from 'views/Board';

const BoardsPage: FC = () => {
  return (
    <main className="boards-page">
      <BoardsNavigation />
      <Route path="/boards/:id" component={Board} />
    </main>
  );
};

export default BoardsPage;
