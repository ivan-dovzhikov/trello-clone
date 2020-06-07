import {
  BoardActionTypes,
  CreateBoardAction,
  ChangeBoardAction,
  DeleteBoardThunk,
} from './types';
import { v4 } from 'uuid';
const { CREATE_BOARD, DELETE_BOARD, CHANGE_BOARD } = BoardActionTypes;

export const createBoard = (title: string): CreateBoardAction => ({
  type: CREATE_BOARD,
  payload: {
    boardId: v4(),
    title,
  },
});

export const deleteBoard: DeleteBoardThunk = (boardId: string) => (
  dispatch,
  getState
) => {
  return dispatch({
    type: DELETE_BOARD,
    payload: { boardId, listsIds: getState().boards.byId[boardId].lists },
  });
};

export const changeBoard = (
  boardId: string,
  title: string
): ChangeBoardAction => ({
  type: CHANGE_BOARD,
  payload: { boardId, title },
});
