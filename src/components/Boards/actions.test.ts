import {
  BoardActionTypes,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
} from './types';
import { createBoard, deleteBoard, changeBoard } from './actions';
import { v4 } from 'uuid';
const { CREATE_BOARD, DELETE_BOARD, CHANGE_BOARD } = BoardActionTypes;

describe('board action creators', () => {
  it(`should create ${CREATE_BOARD} action with generated ID`, () => {
    const title = 'New Board';

    const expected: CreateBoardAction = {
      type: CREATE_BOARD,
      payload: { boardId: expect.any(String), title },
    };

    const actual = createBoard(title);
    expect(actual).toEqual(expected);
  });

  it(`should create ${DELETE_BOARD} thunk`, () => {
    const boardId = v4();
    const listsIds = [v4(), v4()];
    const dispatch = jest.fn();

    const expected: DeleteBoardAction = {
      type: DELETE_BOARD,
      payload: { boardId, listsIds },
    };

    deleteBoard(boardId)(dispatch, () => ({
      boards: {
        byId: {
          [boardId]: { id: boardId, title: '', lists: listsIds },
        },
        allIds: [boardId],
      },
      lists: {},
      cards: {},
    }));

    expect(dispatch).toBeCalledWith(expected);
  });

  it(`should create ${CHANGE_BOARD} action`, () => {
    const boardId = 'some-id';
    const title = 'New title';

    const expected: ChangeBoardAction = {
      type: CHANGE_BOARD,
      payload: { boardId, title },
    };

    const actual = changeBoard(boardId, title);
    expect(actual).toEqual(expected);
  });
});
