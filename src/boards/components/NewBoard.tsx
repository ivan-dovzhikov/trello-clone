import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';

export interface NewBoardProps {
  onCreate: (title: string) => any;
}

const NewBoard: FC<NewBoardProps> = ({ onCreate }) => {
  const intl = useIntl();

  return (
    <div className="boards-navigation__new-board">
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'boards/title',
          defaultMessage: 'Title',
        })}
        displayOnViewMode={intl.formatMessage({
          id: 'boards/new-board',
          defaultMessage: 'Create board',
        })}
        titles={{
          edit: intl.formatMessage({
            id: 'create',
            defaultMessage: 'Create',
          }),
        }}
        exitOnSubmit={false}
        onSubmit={onCreate}
        textareaClassName="boards-navigation__link-textarea"
      />
    </div>
  );
};

export default memo(NewBoard);
