import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';

export interface NewListProps {
  onCreate: (title: string) => any;
}

const NewList: FC<NewListProps> = ({ onCreate }) => {
  const intl = useIntl();

  return (
    <div className="list new-list">
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'lists/title',
          defaultMessage: 'Title',
        })}
        onSubmit={onCreate}
        displayOnViewMode={intl.formatMessage({
          id: 'lists/new-list',
          defaultMessage: 'Create card',
        })}
        titles={{
          edit: intl.formatMessage({ id: 'create', defaultMessage: 'Create' }),
        }}
      />
    </div>
  );
};

export default NewList;
