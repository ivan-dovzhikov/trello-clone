import { Reducer } from 'redux';
import {
  CardActionTypes,
  CardsState,
  CardActions,
  CreateCardAction,
  DeleteCardAction,
  ChangeCardAction,
} from './types';
import { ListActionTypes, DeleteListAction } from 'lists/types';
import { BoardActionTypes, DeleteBoardAction } from 'boards/types';
const { CREATE_CARD, DELETE_CARD, CHANGE_CARD } = CardActionTypes;
const { DELETE_LIST } = ListActionTypes;
const { DELETE_BOARD } = BoardActionTypes;

const initialState: CardsState = {};

const listReducer: Reducer<
  CardsState,
  CardActions | DeleteListAction | DeleteBoardAction
> = (state = initialState, { type, payload }): CardsState => {
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

    case DELETE_LIST: {
      const { cardsIds } = payload as DeleteListAction['payload'];

      const newState: CardsState = {};
      for (const id in state) {
        if (state.hasOwnProperty(id) && !cardsIds.includes(id)) {
          newState[id] = state[id];
        }
      }

      return newState;
    }

    case DELETE_BOARD: {
      const { cardsIds } = payload as DeleteBoardAction['payload'];

      const newState: CardsState = {};
      for (const id in state) {
        if (state.hasOwnProperty(id) && !cardsIds.includes(id)) {
          newState[id] = state[id];
        }
      }

      return newState;
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
