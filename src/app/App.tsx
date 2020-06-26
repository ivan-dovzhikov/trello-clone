import React, { FC } from 'react';
import { IntlProvider, useIntl } from 'react-intl';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'normalize.css';
import './App.scss';
import { AppState } from 'utils';
import translations from './localization/data';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import BoardPage from './BoardPage/BoardPage';
import BoardsNavigation from 'boards';
import NotFoundPage from './NotFoundPage/NotFoundPage';

const App: FC = () => {
  const locale = useSelector<AppState, string>(
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
      <PhotoSignature />
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

const PhotoSignature: FC = () => {
  const intl = useIntl();

  return (
    <span className="app__photo-signature">
      {intl.formatMessage({ id: 'app/photo-by', defaultMessage: 'Photo by' })}{' '}
      <a
        href="https://www.pexels.com/@splitshire"
        target="_blank"
        rel="noopener noreferrer"
      >
        SplitShire
      </a>
      .{' '}
      {intl.formatMessage({
        id: 'app/downloaded-from',
        defaultMessage: 'Downloaded from',
      })}{' '}
      <a
        href="https://www.pexels.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pexels.com
      </a>
    </span>
  );
};

export default App;
