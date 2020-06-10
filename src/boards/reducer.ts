import {
  BoardActionTypes,
  BoardsState,
  BoardActions,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
  MoveListAction,
} from './types';
import { Reducer } from 'react';
import {
  ListActionTypes,
  CreateListAction,
  DeleteListAction,
} from 'lists/types';
const {
  CREATE_BOARD,
  DELETE_BOARD,
  CHANGE_BOARD,
  MOVE_LIST,
} = BoardActionTypes;
const { CREATE_LIST, DELETE_LIST } = ListActionTypes;

const initialState: BoardsState = {
  byId: {},
  allIds: [],
};

const boardReducer: Reducer<
  BoardsState,
  BoardActions | CreateListAction | DeleteListAction
> = (state = initialState, { type, payload }): BoardsState => {
  switch (type) {
    case CREATE_BOARD: {
      const { boardId, title } = payload as CreateBoardAction['payload'];

      const byId = {
        ...state.byId,
        [boardId]: { id: boardId, title, lists: [] },
      };

      return {
        ...state,
        byId,
        allIds: [...state.allIds, boardId],
      };
    }

    case DELETE_BOARD: {
      const { boardId } = payload as DeleteBoardAction['payload'];

      const { [boardId]: ignore, ...byId } = state.byId;
      const allIds = state.allIds.filter(id => id !== boardId);

      return {
        ...state,
        byId,
        allIds,
      };
    }

    case CHANGE_BOARD: {
      const { boardId, title } = payload as ChangeBoardAction['payload'];

      const byId = {
        ...state.byId,
        [boardId]: { ...state.byId[boardId], title },
      };

      return {
        ...state,
        byId,
      };
    }

    case MOVE_LIST: {
      const {
        boardId,
        fromIndex,
        toIndex,
      } = payload as MoveListAction['payload'];

      const byId = { ...state.byId };
      const board = { ...byId[boardId] };
      const lists = [...board.lists];

      const list = lists.splice(fromIndex, 1);
      lists.splice(toIndex, 0, ...list);

      board.lists = lists;
      byId[boardId] = board;

      return {
        ...state,
        byId,
      };
    }

    case CREATE_LIST: {
      const { boardId, listId } = payload as CreateListAction['payload'];

      const board = {
        ...state.byId[boardId],
      };
      board.lists = [...board.lists, listId];

      const byId = {
        ...state.byId,
        [boardId]: board,
      };

      return {
        ...state,
        byId,
      };
    }

    case DELETE_LIST: {
      const {
        boardId,
        listId: targetListId,
      } = payload as DeleteListAction['payload'];

      const board = {
        ...state.byId[boardId],
      };

      board.lists = board.lists.filter(listId => listId !== targetListId);

      const byId = {
        ...state.byId,
        [boardId]: board,
      };

      return {
        ...state,
        byId,
      };
    }

    default: {
      return state;
    }
  }
};

export default boardReducer;
