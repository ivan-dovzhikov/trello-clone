// Constants
export enum BoardActionTypes {
  CREATE_BOARD = 'CREATE_BOARD',
  DELETE_BOARD = 'DELETE_BOARD',
  CHANGE_BOARD = 'CHANGE_BOARD',
}
const { CREATE_BOARD, CHANGE_BOARD, DELETE_BOARD } = BoardActionTypes;

export interface CreateBoardAction {
  type: typeof CREATE_BOARD;
  payload: {
    boardId: string;
    title: string;
  };
}

export interface DeleteBoardAction {
  type: typeof DELETE_BOARD;
  payload: {
    boardId: string;
  };
}

export interface ChangeBoardAction {
  type: typeof CHANGE_BOARD;
  payload: {
    boardId: string;
    title: string;
  };
}

export type BoardActions =
  | CreateBoardAction
  | DeleteBoardAction
  | ChangeBoardAction;

export interface Board {
  id: string;
  title: string;
}

export interface BoardsState {
  byId: {
    [prop: string]: Board;
  };
  allIds: string[];
}