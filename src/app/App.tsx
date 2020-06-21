import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import BoardPage from './BoardPage/BoardPage';
import BoardsNavigation from 'boards';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route
          path="/boards"
          render={() => (
            <>
              <BoardsNavigation />
              <Route path="/boards/:id" component={BoardPage} />
            </>
          )}
        />
        <Route
          path="*"
          render={() => <NotFoundPage message="Such page doesn't exist!" />}
        />
      </Switch>
    </>
  );
};

export default App;
