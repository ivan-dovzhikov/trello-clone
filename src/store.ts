import { Store, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { AppState, AllActions } from 'utils';
import rootReducer from 'rootReducer';
import { loadState } from 'localStorage';

const store: Store<AppState, AllActions> = createStore(
  rootReducer,
  loadState(),
  devToolsEnhancer({})
);

export default store;
