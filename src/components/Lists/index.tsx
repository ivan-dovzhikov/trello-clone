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
    <ul className="lists">
      {lists.map(({ id, title }) => {
        const handleDelete = () => onDelete(id);
        const handleEdit = (newTitle: string) => onEdit(id, newTitle);
        return (
          <li key={id}>
            <ListView
              title={title}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </li>
        );
      })}
      <li>
        <ListCreate onCreate={onCreate} />
      </li>
    </ul>
  );
};

export default Lists;
