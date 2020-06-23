import { useState } from 'react';

export const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => setState(!state);
  return [state, toggleState] as [boolean, () => void];
};
