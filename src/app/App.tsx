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
import BoardPage from './BoardPage/BoardPage';
import BoardsNavigation from 'boards';
import NotFoundPage from './NotFoundPage/NotFoundPage';

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
      </Provider>
    </BrowserRouter>
  );
};

export default App;
