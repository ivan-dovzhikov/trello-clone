import { SyntheticEvent } from 'react';

export const preventDefault = (e: Event | SyntheticEvent) => e.preventDefault();

export const cloneDeep = <T extends {} | []>(structure: T): T =>
  JSON.parse(JSON.stringify(structure));
export const closestByReference = (
  element: HTMLElement,
  reference: HTMLElement | HTMLElement[]
) => {
  let currentElement: HTMLElement | Node | null = element;
  const isArray = Array.isArray(reference);

  const check: (current: HTMLElement | Node) => boolean = isArray
    ? current =>
        (reference as HTMLElement[]).some(
          referenceArrayItem => current === referenceArrayItem
        )
    : current => current === reference;

  do {
    if (check(currentElement)) return currentElement;

    currentElement = currentElement.parentElement || currentElement.parentNode;
  } while (currentElement !== null && currentElement.nodeType === 1);

  return null;
};

export const removeLineBreaks = (value: string) =>
  value.replace(/\r\n|\r|\n/gm, ' ');
