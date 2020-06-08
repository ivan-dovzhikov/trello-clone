import {
  BoardActionTypes,
  BoardsState,
  CreateBoardAction,
  DeleteBoardAction,
  ChangeBoardAction,
} from './types';
import { v4 } from 'uuid';
import boardReducer from './reducer';
import { cloneDeep } from 'utils';
const { CREATE_BOARD, DELETE_BOARD, CHANGE_BOARD } = BoardActionTypes;

describe('Test board reducer', () => {
  const boardIds: string[] = [v4(), v4()];
  const testingState: BoardsState = {
    byId: {
      [boardIds[0]]: {
        id: boardIds[0],
        title: 'board #1',
        lists: [],
      },
      [boardIds[1]]: {
        id: boardIds[1],
        title: 'board #2',
        lists: [],
      },
    },
    allIds: [boardIds[0], boardIds[1]],
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
    const boardId = boardIds[0];
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
    const boardId = boardIds[1];
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
});
