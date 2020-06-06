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
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;

describe('Test card reducer', () => {
  const listId = "doesn't matter";
  const cardIds: string[] = [v4(), v4()];
  const testingState: CardsState = {
    [cardIds[0]]: {
      id: cardIds[0],
      content: 'card #1',
    },
    [cardIds[1]]: {
      id: cardIds[1],
      content: 'card #2',
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
    const cardId = cardIds[0];
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
    const cardId = cardIds[1];
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
});
