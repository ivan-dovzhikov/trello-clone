import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';

export interface NewCardProps {
  onCreate: (content: string) => any;
}

const NewCard: FC<NewCardProps> = ({ onCreate }) => {
  const intl = useIntl();

  return (
    <div className="card new-card">
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'cards/content',
          defaultMessage: 'Content',
        })}
        displayOnViewMode={intl.formatMessage({
          id: 'cards/new-card',
          defaultMessage: 'New card',
        })}
        onSubmit={onCreate}
        titles={{
          edit: intl.formatMessage({ id: 'create', defaultMessage: 'Create' }),
        }}
      />
    </div>
  );
};

export default memo(NewCard);
