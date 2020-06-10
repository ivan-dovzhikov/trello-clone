import { BoardsState, BoardActions } from 'boards/types';
import { ListsState, ListActions } from 'lists/types';
import { CardsState, CardActions } from 'cards/types';

export interface AppState {
  boards: BoardsState;
  lists: ListsState;
  cards: CardsState;
}

export type AllActions = BoardActions | ListActions | CardActions;
