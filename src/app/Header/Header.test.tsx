import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from 'app/localization/data';

describe('Test header component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <IntlProvider locale="en" messages={translations.en.translation}>
          <Header />
        </IntlProvider>
      </BrowserRouter>
    );
  });

  it('should render Home link', () => {
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('should render Boards link', () => {
    expect(screen.getByRole('link', { name: 'Boards' })).toBeInTheDocument();
  });
});
