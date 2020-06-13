import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ListData } from '../types';
import List from './List';
import NewList from './NewList';

interface ListOfListsProps {
  lists: ListData[];
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
    <div className="list-of-lists">
      <Droppable droppableId="lists" direction="horizontal" type="list">
        {provided => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {lists.map(({ id, title }, index) => (
              <li key={id}>
                <List
                  index={index}
                  id={id}
                  title={title}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </li>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <NewList onCreate={onCreate} />
    </div>
  );
};

export default ListOfLists;
