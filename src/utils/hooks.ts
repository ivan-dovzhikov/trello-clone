import { useState, useEffect } from 'react';
import { closestByReference } from './lib';

export const useStateWithCallback = <S>(
  initialState: S,
  callback?: Function
) => {
  const [state, setState] = useState(initialState);
  return [
    state,
    value => {
      if (callback) callback(value);
      setState(value);
    },
  ] as [S, (value: S) => void];
};

export const useSwitchWithCallback = (
  initialState: boolean,
  callback?: Function
) => {
  const [state, setState] = useStateWithCallback(initialState, callback);
  const enable = () => setState(true);
  const disable = () => setState(false);
  return [state, enable, disable] as [boolean, () => void, () => void];
};

export const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => setState(!state);
  return [state, toggleState] as [boolean, () => void];
};

export const useCallbackOnExternalAction = (
  element: HTMLElement | null,
  callback: () => any,
  condition?: boolean
) => {
  useEffect(() => {
    if (!condition || !element) return;

    const handler = ({ target }: Event) => {
      if (!closestByReference(target as HTMLElement, element!)) callback();
    };

    document.addEventListener('click', handler);
    document.addEventListener('focusin', handler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('focusin', handler);
    };
  }, [element, callback, condition]);
};
