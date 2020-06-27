import { LocaleState, LocaleActions } from 'app/localization/types';
import { ThemeState, ThemeActions } from 'app/ThemeToggle/types';
import { BoardsState, BoardActions } from 'boards/types';
import { ListsState, ListActions } from 'lists/types';
import { CardsState, CardActions } from 'cards/types';

export type AnyFunction = (...args: any[]) => any;

export interface AppState {
  locale: LocaleState;
  theme: ThemeState;
  boards: BoardsState;
  lists: ListsState;
  cards: CardsState;
}

export type AllActions =
  | ThemeActions
  | LocaleActions
  | BoardActions
  | ListActions
  | CardActions;
