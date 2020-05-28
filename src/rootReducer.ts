import { combineReducers } from 'redux';
import boardReducer from 'components/Boards/reducer';

export default combineReducers({
  boards: boardReducer,
});
