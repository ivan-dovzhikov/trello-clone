import { ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from 'utils';

export enum ListActionTypes {
  CREATE_LIST = 'CREATE_LIST',
  DELETE_LIST = 'DELETE_LIST',
  CHANGE_LIST = 'CHANGE_LIST',
  MOVE_CARD = 'MOVE_CARD',
}
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST, MOVE_CARD } = ListActionTypes;

export interface CreateListAction {
  type: typeof CREATE_LIST;
  payload: {
    boardId: string;
    listId: string;
    title: string;
  };
}

export interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: {
    boardId: string;
    listId: string;
    cardsIds: string[];
  };
}

export type DeleteListThunk = ActionCreator<
  ThunkAction<DeleteListAction, AppState, void, DeleteListAction>
>;

export interface ChangeListAction {
  type: typeof CHANGE_LIST;
  payload: {
    listId: string;
    title: string;
  };
}

export interface MoveCardAction {
  type: typeof MOVE_CARD;
  payload: {
    fromListId: string;
    toListId: string;
    fromIndex: number;
    toIndex: number;
  };
}

export type ListActions =
  | CreateListAction
  | DeleteListAction
  | ChangeListAction
  | MoveCardAction;

export interface List {
  id: string;
  title: string;
  cards: string[];
}

export interface ListsState {
  [prop: string]: List;
}
