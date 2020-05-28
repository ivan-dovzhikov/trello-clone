import {
  BoardActionTypes,
  BoardsState,
  BoardActions,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
} from './types';
import { Reducer } from 'react';
const { CREATE_BOARD, DELETE_BOARD, CHANGE_BOARD } = BoardActionTypes;

const initialState: BoardsState = {
  byId: {},
  allIds: [],
};

const boardReducer: Reducer<BoardsState, BoardActions> = (
  state = initialState,
  { type, payload }
): BoardsState => {
  switch (type) {
    case CREATE_BOARD: {
      const { boardId, title } = payload as CreateBoardAction['payload'];

      const byId = {
        ...state.byId,
        [boardId]: { id: boardId, title },
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

    default: {
      return state;
    }
  }
};

export default boardReducer;
