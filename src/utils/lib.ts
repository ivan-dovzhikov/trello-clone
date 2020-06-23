import { MouseEvent as ReactMouseEvent } from 'react';

export const preventClickDefault = (e: MouseEvent | ReactMouseEvent) =>
  e.preventDefault();

export const cloneDeep = <T extends {} | []>(structure: T): T =>
  JSON.parse(JSON.stringify(structure));

export const closestByReference = (element: HTMLElement, ref: HTMLElement) => {
  let currentElement: HTMLElement | Node | null = element;

  do {
    if (currentElement === ref) return currentElement;
    currentElement = currentElement.parentElement || currentElement.parentNode;
  } while (currentElement !== null && currentElement.nodeType === 1);

  return null;
};
