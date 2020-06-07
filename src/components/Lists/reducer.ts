import {
  ListActionTypes,
  ListsState,
  ListActions,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
import { Reducer } from 'react';
import { BoardActionTypes, DeleteBoardAction } from 'components/Boards/types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;
const { DELETE_BOARD } = BoardActionTypes;

const initialState: ListsState = {};

const listReducer: Reducer<ListsState, ListActions | DeleteBoardAction> = (
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

    case DELETE_BOARD: {
      const { listsIds } = payload as DeleteBoardAction['payload'];

      const newState: ListsState = {};
      for (const prop in state) {
        if (state.hasOwnProperty(prop) && !listsIds.includes(prop)) {
          newState[prop] = state[prop];
        }
      }

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
