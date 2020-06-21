import { LocaleState, LocaleActions } from 'app/localization/types';
import { BoardsState, BoardActions } from 'boards/types';
import { ListsState, ListActions } from 'lists/types';
import { CardsState, CardActions } from 'cards/types';

export interface AppState {
  locale: LocaleState;
  boards: BoardsState;
  lists: ListsState;
  cards: CardsState;
}

export type AllActions =
  | LocaleActions
  | BoardActions
  | ListActions
  | CardActions;
