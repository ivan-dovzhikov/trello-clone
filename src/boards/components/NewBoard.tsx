import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';

export interface NewBoardProps {
  onCreate: (title: string) => any;
}

const NewBoard: FC<NewBoardProps> = ({ onCreate }) => {
  const intl = useIntl();

  return (
    <div>
      <div className="board-link new-board">
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
        />
      </div>
    </div>
  );
};

export default memo(NewBoard);
