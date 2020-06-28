import React, { FC } from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'normalize.css';
import './App.scss';
import { AppState } from './types';
import translations from 'localization/data';
import Header from './Header/Header';
import PhotoSignature from './PhotoSignature/PhotoSignature';
import NotFoundPage from './views/NotFoundPage/NotFoundPage';
import HomePage from './views/HomePage/HomePage';
import BoardPage from './views/BoardPage/BoardPage';
import BoardsNavigation from 'boards';

const App: FC = () => {
  const locale = useSelector<AppState, string>(
    ({ locale }) => locale.languageCode
  );
  const theme = useSelector<AppState, string>(({ theme }) => theme.theme);

  return (
    <IntlProvider locale={locale} messages={translations[locale].translation}>
      <div id="theme" className={`_theme--${theme}`}>
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
        <PhotoSignature />
      </div>
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
