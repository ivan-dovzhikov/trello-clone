import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import translations from 'app/localization/data';
import { AppState } from 'utils';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

describe('Test header component', () => {
  const testReducer = combineReducers({
    locale: () => ({ languageCode: 'en', languageName: 'english' }),
    boards: () => null,
    lists: () => null,
    cards: () => null,
  });

  const store = createStore(testReducer);

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <IntlProvider locale="en" messages={translations.en.translation}>
            <Header />
          </IntlProvider>
        </Provider>
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
