import {
  ListActionTypes,
  ListsState,
  ListActions,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
import { Reducer } from 'react';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;

const initialState: ListsState = {};

const listReducer: Reducer<ListsState, ListActions> = (
  state = initialState,
  { type, payload }
): ListsState => {
  switch (type) {
    case CREATE_LIST: {
      const { listId, title } = payload as CreateListAction['payload'];

      return {
        ...state,
        [listId]: { id: listId, title },
      };
    }

    case DELETE_LIST: {
      const { listId } = payload as DeleteListAction['payload'];

      const { [listId]: ignore, ...rest } = state;

      return {
        ...rest,
      };
    }

    case CHANGE_LIST: {
      const { listId, title } = payload as ChangeListAction['payload'];

      return {
        ...state,
        [listId]: { ...state[listId], title },
      };
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
