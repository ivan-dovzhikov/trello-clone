import {
  CardActionTypes,
  CreateCardAction,
  DeleteCardAction,
  ChangeCardAction,
} from './types';
import { createCard, deleteCard, changeCard } from './actions';
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;

describe('Test card action creators', () => {
  it(`should create ${CREATE_CARD} action with generated ID`, () => {
    const listId = 'some-list-id';
    const content = 'New Card';

    const expected: CreateCardAction = {
      type: CREATE_CARD,
      payload: { listId, cardId: expect.any(String), content },
    };

    const actual = createCard(listId, content);
    expect(actual).toEqual(expected);
  });

  it(`should create ${DELETE_CARD} action`, () => {
    const listId = 'some-list-id';
    const cardId = 'some-card-id';

    const expected: DeleteCardAction = {
      type: DELETE_CARD,
      payload: { listId, cardId },
    };

    const actual = deleteCard(listId, cardId);
    expect(actual).toEqual(expected);
  });

  it(`should create ${CHANGE_CARD} action`, () => {
    const cardId = 'some-card-id';
    const content = 'New content';

    const expected: ChangeCardAction = {
      type: CHANGE_CARD,
      payload: { cardId, content },
    };

    const actual = changeCard(cardId, content);
    expect(actual).toEqual(expected);
  });
});
