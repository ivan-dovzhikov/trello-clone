export enum ListActionTypes {
  CREATE_LIST = 'CREATE_LIST',
  DELETE_LIST = 'DELETE_LIST',
  CHANGE_LIST = 'CHANGE_LIST',
}
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;

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
  };
}

export interface ChangeListAction {
  type: typeof CHANGE_LIST;
  payload: {
    listId: string;
    title: string;
  };
}

export type ListActions =
  | CreateListAction
  | DeleteListAction
  | ChangeListAction;

export interface List {
  id: string;
  title: string;
  cards: string[];
}

export interface ListsState {
  [prop: string]: List;
}
