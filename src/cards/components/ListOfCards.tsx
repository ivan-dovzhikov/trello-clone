import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import { connector } from './ListOfCardsContainer';
import Card from './Card';
import NewCard from './NewCard';

type CardsListProps = ConnectedProps<typeof connector>;
const CardsList: FC<CardsListProps> = ({
  cards = [],
  onCreate,
  onDelete,
  onEdit,
}) => {
  return (
    <ul className="cards-list">
      {cards.map(({ id, content }, index) => (
        <li key={id}>
          <Card
            index={index}
            id={id}
            content={content}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </li>
      ))}
      <li>
        <NewCard onCreate={onCreate} />
      </li>
    </ul>
  );
};

export default CardsList;
