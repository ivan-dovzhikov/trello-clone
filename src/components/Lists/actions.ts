import { v4 } from 'uuid';
import {
  ListActionTypes,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;

export const createList = (
  boardId: string,
  title: string
): CreateListAction => ({
  type: CREATE_LIST,
  payload: { boardId, listId: v4(), title },
});

export const deleteList = (
  boardId: string,
  listId: string
): DeleteListAction => ({
  type: DELETE_LIST,
  payload: { boardId, listId },
});

export const changeList = (
  listId: string,
  title: string
): ChangeListAction => ({
  type: CHANGE_LIST,
  payload: { listId, title },
});
