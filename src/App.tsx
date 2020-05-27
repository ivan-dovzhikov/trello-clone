import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import HomePage from 'views/Home';

const App: FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="*" render={() => <h2>No such page</h2>} />
    </Switch>
  );
};

export default App;
