import { combineReducers } from 'redux';
import boardReducer from 'boards/reducer';
import listReducer from 'lists/reducer';
import cardReducer from 'cards/reducer';

export default combineReducers({
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
});
