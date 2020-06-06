import { v4 } from 'uuid';
import {
  CardActionTypes,
  CreateCardAction,
  DeleteCardAction,
  ChangeCardAction,
} from './types';
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;

export const createCard = (
  listId: string,
  content: string
): CreateCardAction => ({
  type: CREATE_CARD,
  payload: { listId, cardId: v4(), content },
});

export const deleteCard = (
  listId: string,
  cardId: string
): DeleteCardAction => ({
  type: DELETE_CARD,
  payload: { listId, cardId },
});

export const changeCard = (
  cardId: string,
  content: string
): ChangeCardAction => ({
  type: CHANGE_CARD,
  payload: { cardId, content },
});
