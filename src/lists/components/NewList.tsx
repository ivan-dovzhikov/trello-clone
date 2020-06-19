import React, { FC } from 'react';
import { FieldEditor } from 'shared';

export interface NewListProps {
  onCreate: (title: string) => any;
}

const NewList: FC<NewListProps> = ({ onCreate }) => {
  return (
    <div className="list new-list">
      <FieldEditor
        fieldName="Title"
        onSubmit={onCreate}
        displayOnViewMode="New List"
      />
    </div>
  );
};

export default NewList;
