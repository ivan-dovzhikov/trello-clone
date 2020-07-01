import React, { FC, RefObject } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStateWithCallback } from 'utils';
import { Select, Option } from 'shared';
import { AppState } from 'app/types';
import { setLanguage } from 'localization/actions';
import translations from 'localization/data';

export interface LanguageSelectProps {
  id?: string;
  labelRef?: RefObject<HTMLLabelElement | null>;
}

const LanguageSelect: FC<LanguageSelectProps> = ({ id, labelRef }) => {
  const dispatch = useDispatch();
  const language = useSelector<AppState, string>(
    state => state.locale.languageCode
  );
  const [currentLanguage, setCurrentLanguage] = useStateWithCallback<string>(
    language,
    state => dispatch(setLanguage(state))
  );

  const onChange = (value: string) => {
    setCurrentLanguage(value);
  };

  const options: Option[] = Object.entries(translations).map(
    ([code, data]) => ({
      value: code,
      content: data.name,
    })
  );

  return (
    <Select
      id={id}
      containerClassName="site-menu__language-select"
      labelRef={labelRef}
      value={currentLanguage}
      onChange={onChange}
      options={options}
    />
  );
};

export default LanguageSelect;
