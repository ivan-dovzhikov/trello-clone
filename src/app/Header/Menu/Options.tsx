import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import './Options.scss';
import SelectLanguage from './SelectLanguage';
import ThemeToggle from './ThemeToggle';

export interface OptionsProps {}

const Options: FC<OptionsProps> = () => {
  const intl = useIntl();

  return (
    <fieldset className="site-menu__options-fieldset">
      <legend className="site-menu__options-legend">
        {intl.formatMessage({
          id: 'app/options',
          defaultMessage: 'Options',
        })}
      </legend>
      <div className="site-menu__options-field">
        <SelectLanguage />
      </div>
      <div className="site-menu__options-field">
        <ThemeToggle />
      </div>
    </fieldset>
  );
};

export default Options;
