import React, { FC, useRef } from 'react';
import { useIntl } from 'react-intl';
import './Options.scss';
import LanguageSelect from './LanguageSelect';
import ThemeToggle from './ThemeToggle';

export interface OptionsProps {}

const Options: FC<OptionsProps> = () => {
  const languageSelectLabelRef = useRef<HTMLLabelElement>(null);
  const intl = useIntl();

  const languageSelectId = 'language-select';
  const themeToggleId = 'theme-toggle';

  return (
    <fieldset className="site-menu__options-fieldset">
      <legend className="site-menu__options-legend">
        {intl.formatMessage({
          id: 'app/options',
          defaultMessage: 'Options',
        })}
      </legend>
      <div className="site-menu__option">
        <label
          className="site-menu__option-label"
          htmlFor={languageSelectId}
          ref={languageSelectLabelRef}
        >
          {intl.formatMessage({
            id: 'app/change-language',
            defaultMessage: 'Language',
          })}
          {':'}
        </label>
        <div className="site-menu__options-field">
          <LanguageSelect
            id={languageSelectId}
            labelRef={languageSelectLabelRef}
          />
        </div>
      </div>
      <div className="site-menu__option">
        <label className="site-menu__option-label" htmlFor={themeToggleId}>
          {intl.formatMessage({
            id: 'app/change-theme',
            defaultMessage: 'Theme',
          })}
          {':'}
        </label>
        <div className="site-menu__options-field">
          <ThemeToggle id={themeToggleId} />
        </div>
      </div>
    </fieldset>
  );
};

export default Options;
