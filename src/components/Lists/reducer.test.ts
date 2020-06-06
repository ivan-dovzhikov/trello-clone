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
import {
  CardActionTypes,
  CreateCardAction,
  DeleteCardAction,
} from 'components/Cards/types';
const { CREATE_LIST, DELETE_LIST, CHANGE_LIST } = ListActionTypes;
const { CREATE_CARD, DELETE_CARD } = CardActionTypes;
const { DELETE_BOARD } = BoardActionTypes;

describe('Test list reducer', () => {
  const boardId = "doesn't matter";
  const testingListsIds: string[] = [v4(), v4()];
  const cardIds: string[] = [v4(), v4(), v4(), v4()];
  const testingState: ListsState = {
    [testingListsIds[0]]: {
      id: testingListsIds[0],
      title: 'list #1',
      cards: [cardIds[0]],
    },
    [testingListsIds[1]]: {
      id: testingListsIds[1],
      title: 'list #2',
      cards: [cardIds[1], cardIds[2], cardIds[3]],
    },
    [testingListsIds[2]]: {
      id: testingListsIds[2],
      title: 'list #3',
      cards: [],
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
    expected[listId] = { id: listId, title, cards: [] };

    const actual = listReducer(testingState, action);

    it('should create new list', () => {
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

    it('should delete list', () => {
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

    it('should change list title', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Create card action', () => {
    const content = 'whatever';
    const cardId = v4();
    const listId = testingListsIds[0];
    const action: CreateCardAction = {
      type: CREATE_CARD,
      payload: { listId, cardId, content },
    };

    const expected = cloneDeep(testingState);
    expected[listId].cards.push(cardId);

    const actual = listReducer(testingState, action);

    it('should add card id list', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete card action', () => {
    const cardId = cardIds[2];
    const listId = testingListsIds[1];
    const action: DeleteCardAction = {
      type: DELETE_CARD,
      payload: { listId, cardId },
    };

    const expected = cloneDeep(testingState);
    expected[listId].cards = expected[listId].cards.filter(id => id !== cardId);

    const actual = listReducer(testingState, action);

    it('should remove card id from list', () => {
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
