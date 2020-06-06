import { combineReducers } from 'redux';
import boardReducer from 'components/Boards/reducer';
import listReducer from 'components/Lists/reducer';
import cardReducer from 'components/Cards/reducer';

export default combineReducers({
  boards: boardReducer,
  lists: listReducer,
  cards: cardReducer,
});
