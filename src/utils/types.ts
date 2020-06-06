import { BoardsState, BoardActions } from 'components/Boards/types';
import { ListsState, ListActions } from 'components/Lists/types';
import { CardsState, CardActions } from 'components/Cards/types';

export interface AppState {
  boards: BoardsState;
  lists: ListsState;
  cards: CardsState;
}

export type AllActions = BoardActions | ListActions | CardActions;
