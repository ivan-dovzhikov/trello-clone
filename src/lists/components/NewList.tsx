import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';
import './NewList.scss';

export interface NewListProps {
  onCreate: (title: string) => any;
}

const NewList: FC<NewListProps> = ({ onCreate }) => {
  const intl = useIntl();

  return (
    <div className="lists__new-list">
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'lists/title',
          defaultMessage: 'Title',
        })}
        displayOnViewMode={intl.formatMessage({
          id: 'lists/new-list',
          defaultMessage: 'Create card',
        })}
        titles={{
          edit: intl.formatMessage({ id: 'create', defaultMessage: 'Create' }),
        }}
        exitOnSubmit={false}
        onSubmit={onCreate}
        textareaClassName="lists__list-textarea"
      />
    </div>
  );
};

export default memo(NewList);
