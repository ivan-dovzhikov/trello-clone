import React, { FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState, useStateWithCallback } from 'utils';
import { setLanguage } from 'localization/actions';
import translations from 'localization/data';
import './SelectLanguage.scss';

const SelectLanguage: FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const language = useSelector<AppState, string>(
    state => state.locale.languageCode
  );
  const [currentLanguage, setCurrentLanguage] = useStateWithCallback<string>(
    language,
    state => dispatch(setLanguage(state))
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.target.value);
  };

  // TODO: create custom components
  return (
    <label className="change-language">
      {intl.formatMessage({
        id: 'app/change-language',
        defaultMessage: 'Language',
      })}
      {':'}
      <select
        value={currentLanguage}
        onChange={onChange}
        className="language-select"
      >
        {Object.entries(translations).map(([code, data]) => (
          <option key={code} value={code} className="language-option">
            {data.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectLanguage;
