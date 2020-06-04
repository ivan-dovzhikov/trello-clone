import throttle from 'lodash/throttle';
import store from 'store';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return;
    return JSON.parse(serializedState);
  } catch (err) {
    return;
  }
};

export const saveState = () => {
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return;
  }
};

export const watchState = throttle(() => {
  store.subscribe(saveState);
}, 1000);
