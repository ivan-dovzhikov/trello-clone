import { BoardsState, BoardActions } from 'components/Boards/types';
import { ListsState, ListActions } from 'components/Lists/types';

export interface AppState {
  boards: BoardsState;
  lists: ListsState;
}

export type AllActions = BoardActions | ListActions;
