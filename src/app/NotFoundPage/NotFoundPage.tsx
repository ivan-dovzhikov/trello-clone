import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Button } from 'shared';
import './styles.scss';

export interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ message }) => {
  const history = useHistory();
  const intl = useIntl();

  return (
    <main className="not-found-page">
      <div className="not-found-page__message">
        <span className="not-found-page__error-code">404</span>
        <p>{message}</p>
        <Button onClick={history.goBack}>
          {intl.formatMessage({
            id: 'app/go-back',
            defaultMessage: 'Go back',
          })}
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
