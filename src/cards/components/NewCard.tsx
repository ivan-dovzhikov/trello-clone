import React, { FC, memo } from 'react';
import { useIntl } from 'react-intl';
import { FieldEditor } from 'shared';
import './NewCard.scss';

export interface NewCardProps {
  onCreate: (content: string) => any;
  toggleListDrag: () => void;
}

const NewCard: FC<NewCardProps> = ({ onCreate, toggleListDrag }) => {
  const intl = useIntl();

  return (
    <div className="cards__new-card">
      <FieldEditor
        fieldName={intl.formatMessage({
          id: 'cards/content',
          defaultMessage: 'Content',
        })}
        displayOnViewMode={intl.formatMessage({
          id: 'cards/new-card',
          defaultMessage: 'New card',
        })}
        titles={{
          edit: intl.formatMessage({
            id: 'create',
            defaultMessage: 'Create',
          }),
        }}
        exitOnSubmit={false}
        onSubmit={onCreate}
        onEditToggle={toggleListDrag}
        textareaClassName="cards__card-textarea"
      />
    </div>
  );
};

export default memo(NewCard);
