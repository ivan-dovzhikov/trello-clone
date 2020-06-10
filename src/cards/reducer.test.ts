import {
  CardActionTypes,
  CardsState,
  CreateCardAction,
  DeleteCardAction,
  ChangeCardAction,
} from './types';
import { v4 } from 'uuid';
import cardReducer from './reducer';
import { cloneDeep } from 'utils';
import { ListActionTypes, DeleteListAction } from 'lists/types';
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;
const { DELETE_LIST } = ListActionTypes;

describe('Test card reducer', () => {
  const listId = "doesn't matter";
  const testingCardsIds: string[] = [v4(), v4(), v4()];
  const testingState: CardsState = {
    [testingCardsIds[0]]: {
      id: testingCardsIds[0],
      content: 'card #1',
    },
    [testingCardsIds[1]]: {
      id: testingCardsIds[1],
      content: 'card #2',
    },
    [testingCardsIds[2]]: {
      id: testingCardsIds[3],
      content: 'card #3',
    },
  };

  describe('Create card action', () => {
    const cardId = v4();
    const content = 'New card';
    const action: CreateCardAction = {
      type: CREATE_CARD,
      payload: {
        listId,
        cardId,
        content,
      },
    };
    const expected = cloneDeep(testingState);
    expected[cardId] = { id: cardId, content };

    const actual = cardReducer(testingState, action);

    it('should create new card', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete card action', () => {
    const cardId = testingCardsIds[0];
    const action: DeleteCardAction = {
      type: DELETE_CARD,
      payload: { listId, cardId },
    };

    const expected = cloneDeep(testingState);
    delete expected[cardId];

    const actual = cardReducer(testingState, action);

    it('should delete card', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Change card action', () => {
    const content = 'New content';
    const cardId = testingCardsIds[1];
    const action: ChangeCardAction = {
      type: CHANGE_CARD,
      payload: { cardId, content },
    };

    const expected = cloneDeep(testingState);
    expected[cardId].content = content;

    const actual = cardReducer(testingState, action);

    it('should change card', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete list cards', () => {
    const boardId = v4();
    const listId = v4();
    const cardsIds = [testingCardsIds[0], testingCardsIds[1]];
    const action: DeleteListAction = {
      type: DELETE_LIST,
      payload: { boardId, listId, cardsIds },
    };

    const expected = cloneDeep(testingState);
    delete expected[cardsIds[0]];
    delete expected[cardsIds[1]];

    const actual = cardReducer(testingState, action);

    it('should remove given cards ids', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });

  describe('Delete board cards', () => {
    const boardId = v4();
    const listId = v4();
    const cardsIds = [testingCardsIds[0], testingCardsIds[1]];
    const action: DeleteListAction = {
      type: DELETE_LIST,
      payload: { boardId, listId, cardsIds },
    };

    const expected = cloneDeep(testingState);
    delete expected[cardsIds[0]];
    delete expected[cardsIds[1]];

    const actual = cardReducer(testingState, action);

    it('should remove given cards ids', () => {
      expect(actual).toEqual(expected);
    });

    it('should not mutate state', () => {
      expect(actual).not.toBe(testingState);
    });
  });
});
