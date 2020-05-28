import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import Header from 'layout/Header';
import HomePage from 'views/Home';
import BoardsPage from 'views/Boards';

const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/boards" component={BoardsPage} />
        <Route path="*" render={() => <h2>No such page</h2>} />
      </Switch>
    </>
  );
};

export default App;
