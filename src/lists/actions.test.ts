import {
  ListActionTypes,
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
  MoveCardAction,
} from './types';
import { createList, deleteList, changeList, moveCard } from './actions';
import { v4 } from 'uuid';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST, MOVE_CARD } = ListActionTypes;

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

  it(`should create ${DELETE_LIST} thunk`, () => {
    const boardId = v4();
    const listsIds = [v4(), v4()];
    const cardsIds = [v4(), v4(), v4()];
    const dispatch = jest.fn();

    const expected: DeleteListAction = {
      type: DELETE_LIST,
      payload: {
        boardId,
        listId: listsIds[0],
        cardsIds: [cardsIds[0], cardsIds[2]],
      },
    };

    deleteList(boardId, listsIds[0])(dispatch, () => ({
      boards: {
        byId: {
          [boardId]: { id: boardId, title: '', lists: listsIds },
        },
        allIds: [boardId],
      },
      lists: {
        [listsIds[0]]: {
          id: listsIds[0],
          title: '',
          cards: [cardsIds[0], cardsIds[2]],
        },
        [listsIds[1]]: { id: listsIds[1], title: '', cards: [cardsIds[1]] },
      },
      cards: {
        [cardsIds[0]]: { id: cardsIds[0], content: '' },
        [cardsIds[1]]: { id: cardsIds[1], content: '' },
        [cardsIds[2]]: { id: cardsIds[2], content: '' },
      },
    }));

    expect(dispatch).toBeCalledWith(expected);
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

  it(`should create ${MOVE_CARD} action`, () => {
    const fromListId = v4();
    const toListId = v4();
    const fromIndex = 5;
    const toIndex = 1;

    const expected: MoveCardAction = {
      type: MOVE_CARD,
      payload: { fromListId, toListId, fromIndex, toIndex },
    };

    const actual = moveCard(fromListId, toListId, fromIndex, toIndex);
    expect(actual).toEqual(expected);
  });
});
