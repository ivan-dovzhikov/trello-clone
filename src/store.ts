import { Store, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { AppState, AllActions } from 'utils';
import rootReducer from 'rootReducer';

const store: Store<AppState, AllActions> = createStore(
  rootReducer,
  devToolsEnhancer({})
);

export default store;
