import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Button } from 'shared';

const HomePage: FC = () => {
  return (
    <main className="home-page">
      <h1>Trello clone</h1>
      <Link to="/boards">
        <Button styleType={'accent'}>Get started</Button>
      </Link>
    </main>
  );
};

export default HomePage;
