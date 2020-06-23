import { useState, useEffect } from 'react';
import { closestByReference } from './lib';

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
