import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'shared';
import './styles.scss';

const HomePage: FC = () => {
  return (
    <main className="home-page">
      <h1>Trello clone</h1>
      <Link to="/boards">
        <Button>Get started</Button>
      </Link>
    </main>
  );
};

export default HomePage;
