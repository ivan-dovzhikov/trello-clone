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
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;

describe('Test list reducer', () => {
  const boardId = "doesn't matter";
  const listIds: string[] = [v4(), v4()];
  const testingState: ListsState = {
    [listIds[0]]: {
      id: listIds[0],
      title: 'list #1',
    },
    [listIds[1]]: {
      id: listIds[1],
      title: 'list #2',
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
    const listId = listIds[0];
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
    const listId = listIds[1];
    const action: ChangeListAction = {
      type: CHANGE_LIST,
      payload: { boardId, listId, title },
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
});
