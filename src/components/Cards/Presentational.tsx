import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import { connector } from './Container';
import { CardView, CardCreate } from 'components/Card/';

type CardsListProps = ConnectedProps<typeof connector>;
const CardsList: FC<CardsListProps> = ({
  cards = [],
  onCreate,
  onDelete,
  onEdit,
}) => {
  return (
    <ul className="cards-list">
      {cards.map(({ id, content }) => (
        <li key={id}>
          <CardView
            id={id}
            content={content}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </li>
      ))}
      <li>
        <CardCreate onCreate={onCreate} />
      </li>
    </ul>
  );
};

export default CardsList;
