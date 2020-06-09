import React, { FC } from 'react';
import './styles.scss';
import { ListView } from 'components/List/View';
import { ListCreate } from 'components/List/Create';
import { List } from './types';

interface ListsProps {
  lists: List[];
  onCreate: (title: string) => any;
  onDelete: (id: string) => any;
  onEdit: (id: string, newTitle: string) => any;
}

const Lists: FC<ListsProps> = ({ lists, onCreate, onDelete, onEdit }) => {
  return (
    <>
      <ul className="lists">
        {lists.map(({ id, title }, index) => {
          return (
            <li key={id}>
              <ListView
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
      <ListCreate onCreate={onCreate} />
    </>
  );
};

export default Lists;
