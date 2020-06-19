import React, { FC } from 'react';
import './styles.scss';
import { Button } from 'shared';
import { useHistory } from 'react-router-dom';

export interface NotFoundPageProps {
  message?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ message = '' }) => {
  const history = useHistory();

  return (
    <main className="not-found-page">
      <div className="message">
        <span className="error-code">404</span>
        <p>{message}</p>
        <Button onClick={history.goBack}>Go back</Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
