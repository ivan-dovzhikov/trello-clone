import {
  BoardActionTypes,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
  MoveListAction,
} from './types';
import { createBoard, deleteBoard, changeBoard, moveList } from './actions';
import { v4 } from 'uuid';
const {
  CREATE_BOARD,
  DELETE_BOARD,
  CHANGE_BOARD,
  MOVE_LIST,
} = BoardActionTypes;

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
    const cardsIds = [v4()];
    const dispatch = jest.fn();

    const expected: DeleteBoardAction = {
      type: DELETE_BOARD,
      payload: { boardId, listsIds, cardsIds },
    };

    deleteBoard(boardId)(dispatch, () => ({
      boards: {
        byId: {
          [boardId]: { id: boardId, title: '', lists: listsIds },
        },
        allIds: [boardId],
      },
      lists: {
        [listsIds[0]]: { id: listsIds[0], title: '', cards: [cardsIds[0]] },
        [listsIds[1]]: { id: listsIds[1], title: '', cards: [] },
      },
      cards: { [cardsIds[0]]: { id: cardsIds[0], content: '' } },
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

  it(`should create ${MOVE_LIST} action`, () => {
    const boardId = v4();
    const fromIndex = 2;
    const toIndex = 4;

    const expected: MoveListAction = {
      type: MOVE_LIST,
      payload: { boardId, fromIndex, toIndex },
    };

    const actual = moveList(boardId, fromIndex, toIndex);
    expect(actual).toEqual(expected);
  });
});
