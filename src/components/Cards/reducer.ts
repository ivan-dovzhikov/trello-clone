import {
  CardActionTypes,
  CardsState,
  CardActions,
  CreateCardAction,
  DeleteCardAction,
  ChangeCardAction,
} from './types';
import { Reducer } from 'react';
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;

const initialState: CardsState = {};

const listReducer: Reducer<CardsState, CardActions> = (
  state = initialState,
  { type, payload }
): CardsState => {
  switch (type) {
    case CREATE_CARD: {
      const { cardId, content } = payload as CreateCardAction['payload'];

      return {
        ...state,
        [cardId]: { id: cardId, content },
      };
    }

    case DELETE_CARD: {
      const { cardId } = payload as DeleteCardAction['payload'];

      const { [cardId]: ignore, ...rest } = state;

      return {
        ...rest,
      };
    }

    case CHANGE_CARD: {
      const { cardId, content } = payload as ChangeCardAction['payload'];

      return {
        ...state,
        [cardId]: { ...state[cardId], content },
      };
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
