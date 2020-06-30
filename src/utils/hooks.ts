import { useState, useEffect } from 'react';
import { closestByReference } from './lib';

export const useStateWithCallback = <S>(
  initialState: S,
  callback?: (state: S) => any
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
  callback?: (state: boolean) => any
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

export type ElementType = HTMLElement | null | undefined;

export const useCallbackOnExternalAction = (
  elements: ElementType | ElementType[],
  callback: () => any,
  condition?: boolean
) => {
  useEffect(() => {
    if (!condition || !elements) return;

    const clearedArray = Array.isArray(elements)
      ? elements.reduce<HTMLElement[]>((arr, element) => {
          if (element) arr.push(element);
          return arr;
        }, [])
      : elements;

    const handler = ({ target }: Event) => {
      if (!closestByReference(target as HTMLElement, clearedArray)) callback();
    };

    document.addEventListener('click', handler);
    document.addEventListener('focusin', handler);
    return () => {
      document.removeEventListener('click', handler);
      document.removeEventListener('focusin', handler);
    };
  }, [elements, callback, condition]);
};
