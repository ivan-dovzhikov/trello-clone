import {
  ListActionTypes,
  ListsState,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
import { v4 } from 'uuid';
import listReducer from './reducer';
import { cloneDeep } from 'utils';
import { BoardActionTypes, DeleteBoardAction } from 'components/Boards/types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;
const { DELETE_BOARD } = BoardActionTypes;

describe('Test list reducer', () => {
  const boardId = "doesn't matter";
  const testingListsIds: string[] = [v4(), v4(), v4()];
  const testingState: ListsState = {
    [testingListsIds[0]]: {
      id: testingListsIds[0],
      title: 'list #1',
    },
    [testingListsIds[1]]: {
      id: testingListsIds[1],
      title: 'list #2',
    },
    [testingListsIds[2]]: {
      id: testingListsIds[2],
      title: 'list #3',
    },
  };

  describe('Create list action', () => {
    const listId = v4();
    const title = 'New board';
    const action: CreateListAction = {
      type: CREATE_LIST,
      payload: {
        boardId,
        listId,
        title,
      },
    };
    const expected = cloneDeep(testingState);
    expected[listId] = { id: listId, title };

    const actual = listReducer(testingState, action);

    it('should create new board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete list action', () => {
    const listId = testingListsIds[0];
    const action: DeleteListAction = {
      type: DELETE_LIST,
      payload: { boardId, listId },
    };

    const expected = cloneDeep(testingState);
    delete expected[listId];

    const actual = listReducer(testingState, action);

    it('should delete board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Change list action', () => {
    const title = 'New title';
    const listId = testingListsIds[1];
    const action: ChangeListAction = {
      type: CHANGE_LIST,
      payload: { listId, title },
    };

    const expected = cloneDeep(testingState);
    expected[listId].title = title;

    const actual = listReducer(testingState, action);

    it('should change board', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete board lists', () => {
    const listsIds = [testingListsIds[0], testingListsIds[1]];
    const action: DeleteBoardAction = {
      type: DELETE_BOARD,
      payload: { boardId, listsIds },
    };

    const expected = cloneDeep(testingState);
    delete expected[listsIds[0]];
    delete expected[listsIds[1]];

    const actual = listReducer(testingState, action);

    it('should remove given list ids', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });
});
