import { MouseEvent as ReactMouseEvent } from 'react';

export const preventClickDefault = (e: MouseEvent | ReactMouseEvent) =>
  e.preventDefault();

export const cloneDeep = <T extends {} | []>(structure: T): T =>
  JSON.parse(JSON.stringify(structure));
