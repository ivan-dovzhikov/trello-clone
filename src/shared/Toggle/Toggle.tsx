import React, { FC, ComponentProps } from 'react';
import './Toggle.scss';

export interface ToggleProps extends ComponentProps<'input'> {}

export const Toggle: FC<ToggleProps> = ({ className, ...attributes }) => {
  return (
    <div className="toggle">
      <input
        {...attributes}
        className={`chackbox${className ? ' ' + className : ''}`}
        type="checkbox"
      />
      <div className="slider" />
    </div>
  );
};
