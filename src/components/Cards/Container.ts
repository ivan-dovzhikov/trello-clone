import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { Card, CreateCardAction, DeleteCardAction } from './types';
import { AppState } from 'utils';
import { createCard, deleteCard, changeCard } from './actions';
import CardsList from './Presentational';

interface StateProps {
  cards: Card[];
}

interface OwnProps {
  listId: string;
}

const mapState: MapStateToProps<StateProps, OwnProps, AppState> = (
  { cards, lists },
  { listId }
) => {
  return { cards: lists[listId]?.cards.map(id => cards[id]) };
};

interface DispatchProps {
  onCreate: (content: string) => CreateCardAction;
  onDelete: (cardId: string) => DeleteCardAction;
  onEdit: typeof changeCard;
}

const mapDispatch: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch,
  { listId }
) => ({
  onCreate: content => dispatch(createCard(listId, content)),
  onDelete: cardId => dispatch(deleteCard(listId, cardId)),
  onEdit: (cardId, content) => dispatch(changeCard(cardId, content)),
});

export const connector = connect(mapState, mapDispatch);
export default connector(CardsList);
