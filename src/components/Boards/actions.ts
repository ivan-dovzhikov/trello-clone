import {
  BoardActionTypes,
  CreateBoardAction,
  ChangeBoardAction,
  DeleteBoardThunk,
  MoveListAction,
} from './types';
import { v4 } from 'uuid';
const {
  CREATE_BOARD,
  DELETE_BOARD,
  CHANGE_BOARD,
  MOVE_LIST,
} = BoardActionTypes;

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
  const { boards, lists } = getState();
  const listsIds = boards.byId[boardId].lists;
  const cardsIds = listsIds.map(id => lists[id].cards).flat();

  return dispatch({
    type: DELETE_BOARD,
    payload: {
      boardId,
      listsIds,
      cardsIds,
    },
  });
};

export const changeBoard = (
  boardId: string,
  title: string
): ChangeBoardAction => ({
  type: CHANGE_BOARD,
  payload: { boardId, title },
});

export const moveList = (
  boardId: string,
  fromIndex: number,
  toIndex: number
): MoveListAction => ({
  type: MOVE_LIST,
  payload: {
    boardId,
    fromIndex,
    toIndex,
  },
});
