import {
  ListActionTypes,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from './types';
import { createList, deleteList, changeList } from './actions';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;

describe('board action creators', () => {
  it(`should create ${CREATE_LIST} action with generated ID`, () => {
    const boardId = 'some-board-id';
    const title = 'New Board';

    const expected: CreateListAction = {
      type: CREATE_LIST,
      payload: { boardId, listId: expect.any(String), title },
    };

    const actual = createList(boardId, title);
    expect(actual).toEqual(expected);
  });

  it(`should create ${DELETE_LIST} action`, () => {
    const boardId = 'some-board-id';
    const listId = 'some-list-id';

    const expected: DeleteListAction = {
      type: DELETE_LIST,
      payload: { boardId, listId },
    };

    const actual = deleteList(boardId, listId);
    expect(actual).toEqual(expected);
  });

  it(`should create ${CHANGE_LIST} action`, () => {
    const listId = 'some-list-id';
    const title = 'New title';

    const expected: ChangeListAction = {
      type: CHANGE_LIST,
      payload: { listId, title },
    };

    const actual = changeList(listId, title);
    expect(actual).toEqual(expected);
  });
});
