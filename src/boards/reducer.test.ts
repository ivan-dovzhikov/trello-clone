import {
  BoardActionTypes,
  BoardsState,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
  MoveListAction,
} from './types';
import { v4 } from 'uuid';
import boardReducer from './reducer';
import { cloneDeep } from 'utils';
const {
  CREATE_BOARD,
  DELETE_BOARD,
  CHANGE_BOARD,
  MOVE_LIST,
} = BoardActionTypes;

describe('Test board reducer', () => {
  const testingBoardsIds = [v4(), v4(), v4()];
  const testingListsIds = [v4(), v4(), v4()];
  const testingState: BoardsState = {
    byId: {
      [testingBoardsIds[0]]: {
        id: testingBoardsIds[0],
        title: 'board #1',
        lists: testingListsIds,
      },
      [testingBoardsIds[1]]: {
        id: testingBoardsIds[1],
        title: 'board #2',
        lists: [],
      },
      [testingBoardsIds[2]]: {
        id: testingBoardsIds[2],
        title: 'board #3',
        lists: [],
      },
    },
    allIds: [testingBoardsIds[0], testingBoardsIds[1], testingBoardsIds[2]],
  };

  describe('Create board action', () => {
    const boardId = v4();
    const title = 'New board';
    const action: CreateBoardAction = {
      type: CREATE_BOARD,
      payload: {
        boardId,
        title,
      },
    };
    const expected = cloneDeep(testingState);
    expected.byId[boardId] = { id: boardId, title, lists: [] };
    expected.allIds.push(boardId);

    const actual = boardReducer(testingState, action);

    it('should create new board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete board action', () => {
    const boardId = testingBoardsIds[0];
    const action: DeleteBoardAction = {
      type: DELETE_BOARD,
      payload: { boardId, listsIds: [], cardsIds: [] },
    };

    const expected = cloneDeep(testingState);
    delete expected.byId[boardId];
    expected.allIds = expected.allIds.filter(id => id !== boardId);

    const actual = boardReducer(testingState, action);

    it('should delete board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Change board action', () => {
    const title = 'New title';
    const boardId = testingBoardsIds[1];
    const action: ChangeBoardAction = {
      type: CHANGE_BOARD,
      payload: { boardId, title },
    };

    const expected = cloneDeep(testingState);
    expected.byId[boardId] = {
      ...expected.byId[boardId],
      id: boardId,
      title,
    };

    const actual = boardReducer(testingState, action);
    it('should change board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Move list action', () => {
    const boardId = testingBoardsIds[0];
    const fromIndex = 2;
    const toIndex = 1;

    const action: MoveListAction = {
      type: MOVE_LIST,
      payload: { boardId, fromIndex, toIndex },
    };

    const expected = cloneDeep(testingState);
    const list = expected.byId[boardId].lists.splice(fromIndex, 1);
    expected.byId[boardId].lists.splice(toIndex, 0, ...list);

    const actual = boardReducer(testingState, action);

    it('should move list from one index to another', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });
});
