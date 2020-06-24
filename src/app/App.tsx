import React, { FC } from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'normalize.css';
import './App.scss';
import { AppState } from 'utils';
import { AvailableLanguages } from './localization/types';
import translations from './localization/data';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import BoardPage from './BoardPage/BoardPage';
import BoardsNavigation from 'boards';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App: FC = () => {
  const locale = useSelector<AppState, AvailableLanguages>(
    ({ locale }) => locale.languageCode
  );

  return (
    <IntlProvider locale={locale} messages={translations[locale].translation}>
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
        <Route path="*" component={PageNotFound} />
      </Switch>
    </IntlProvider>
  );
};

const PageNotFound: FC = () => {
  const intl = useIntl();

  return (
    <NotFoundPage
      message={intl.formatMessage({
        id: 'app/page404',
        defaultMessage: "Such page doesn't exist",
      })}
    />
  );
};

export default App;
