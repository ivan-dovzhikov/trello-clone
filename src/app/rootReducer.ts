import { combineReducers } from 'redux';
import localeReducer from './localization/reducer';
import boardReducer from 'boards/reducer';
import listReducer from 'lists/reducer';
import cardReducer from 'cards/reducer';

export default combineReducers({
  locale: localeReducer,
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
});
