import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Button } from 'shared';
import './styles.scss';

const HomePage: FC = () => {
  const intl = useIntl();

  return (
    <main className="home-page">
      <h1>Trello clone</h1>
      <Link to="/boards" tabIndex={-1}>
        <Button>
          {intl.formatMessage({
            id: 'app/get-started',
            defaultMessage: 'Get started',
          })}
        </Button>
      </Link>
    </main>
  );
};

export default HomePage;
