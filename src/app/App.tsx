import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'normalize.css';
import './App.scss';
import store from './store';
import { watchState } from './localStorage';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import BoardPage from './BoardPage/BoardPageContainer';
import BoardsNavigation from 'boards';

watchState();

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={HomePage} />
          <Route
            path="/boards"
            render={() => (
              <main>
                <BoardsNavigation />
                <Route path="/boards/:id" component={BoardPage} />
              </main>
            )}
          />
          <Route path="*" render={() => <h2>No such page</h2>} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
