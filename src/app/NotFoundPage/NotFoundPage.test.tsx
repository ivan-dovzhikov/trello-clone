import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from 'app/localization/data';
import NotFoundPage from './NotFoundPage';

describe('Test Not found page component', () => {
  const setup = () => {
    const language = 'en';
    const message = 'Some message';

    render(
      <BrowserRouter>
        <IntlProvider
          locale={language}
          messages={translations[language].translation}
        >
          <NotFoundPage message={message} />
        </IntlProvider>
      </BrowserRouter>
    );

    return {
      language,
      message,
    };
  };

  it('should render given message', () => {
    const { message } = setup();
    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render "Go back" button', () => {
    const { language } = setup();
    const buttonText = translations[language].translation['app/go-back'];

    expect(
      screen.getByRole('button', { name: buttonText })
    ).toBeInTheDocument();
  });
});
