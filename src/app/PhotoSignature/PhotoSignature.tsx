import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { AppState } from 'app/types';
import { ThemeState } from 'themes/types';
import './PhotoSignature.scss';

export interface PhotoSignatureProps {}

const PhotoSignature: FC<PhotoSignatureProps> = () => {
  const intl = useIntl();
  const themeData = useSelector<AppState, ThemeState['data']>(
    ({ theme }) => theme.data
  );

  return (
    <span className="app__photo-signature">
      {intl.formatMessage({ id: 'app/photo-by', defaultMessage: 'Photo by' })}{' '}
      <a
        className="app__photo-signature-link"
        href={themeData.bgAuthorLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {themeData.bgAuthor}
      </a>{' '}
      {intl.formatMessage({
        id: 'app/downloaded-from',
        defaultMessage: 'from',
      })}{' '}
      <a
        className="app__photo-signature-link"
        href={themeData.bgSourceLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {themeData.bgSource}
      </a>
    </span>
  );
};

export default PhotoSignature;
