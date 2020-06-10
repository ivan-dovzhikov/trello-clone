import React, { FC } from 'react';
import { ListState } from '../types';
import List from './List';
import NewList from './NewList';

interface ListOfListsProps {
  lists: ListState[];
  onCreate: (title: string) => any;
  onDelete: (id: string) => any;
  onEdit: (id: string, newTitle: string) => any;
}

const ListOfLists: FC<ListOfListsProps> = ({
  lists,
  onCreate,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      <ul className="lists">
        {lists.map(({ id, title }, index) => {
          return (
            <li key={id}>
              <List
                index={index}
                id={id}
                title={title}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
      <NewList onCreate={onCreate} />
    </>
  );
};

export default ListOfLists;
