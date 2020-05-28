import { BoardsState, BoardActions } from 'components/Boards/types';

export interface AppState {
  boards: BoardsState;
}

export type AllActions = BoardActions;
