import React, { forwardRef, ComponentProps } from 'react';
import './Button.scss';

export interface ButtonProps extends ComponentProps<'button'> {
  styleType?: 'accent' | 'plain';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className: derivedClassName = '', styleType = '', ...attributes },
    ref
  ) => {
    let className = 'button';
    if (styleType) className += '--' + styleType;
    if (derivedClassName) className += ' ' + derivedClassName;
    return <button className={className} {...attributes} ref={ref} />;
  }
);
