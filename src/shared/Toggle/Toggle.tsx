import React, { FC, ComponentProps } from 'react';
import './Toggle.scss';

export interface ToggleProps extends ComponentProps<'input'> {
  containerClassName?: string;
  sliderClassName?: string;
}

export const Toggle: FC<ToggleProps> = ({
  containerClassName,
  sliderClassName,
  ...attributes
}) => {
  return (
    <div
      className={`toggle${containerClassName ? ' ' + containerClassName : ''}`}
    >
      <input {...attributes} className="toggle__chackbox" type="checkbox" />
      <div
        className={`toggle__slider${
          sliderClassName ? ' ' + sliderClassName : ''
        }`}
      />
    </div>
  );
};
