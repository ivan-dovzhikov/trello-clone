export enum CardActionTypes {
  CREATE_CARD = 'CREATE_CARD',
  DELETE_CARD = 'DELETE_CARD',
  CHANGE_CARD = 'CHANGE_CARD',
}
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;

export interface CreateCardAction {
  type: typeof CREATE_CARD;
  payload: {
    listId: string;
    cardId: string;
    content: string;
  };
}

export interface DeleteCardAction {
  type: typeof DELETE_CARD;
  payload: {
    listId: string;
    cardId: string;
  };
}

export interface ChangeCardAction {
  type: typeof CHANGE_CARD;
  payload: {
    cardId: string;
    content: string;
  };
}

export type CardActions =
  | CreateCardAction
  | DeleteCardAction
  | ChangeCardAction;

export interface CardData {
  id: string;
  content: string;
}

export interface CardsState {
  [prop: string]: CardData;
}
