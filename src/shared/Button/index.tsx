import React, { forwardRef, ComponentProps } from 'react';
import './styles.scss';

export interface ButtonProps extends ComponentProps<'button'> {
  icon?: boolean;
  styleType?: 'plain' | 'fill' | 'accent';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon = false,
      styleType = 'plain',
      className: derivedClassName = '',
      ...attributes
    },
    ref
  ) => {
    let className = `button ${styleType}${icon ? ' icon' : ''}`;
    if (derivedClassName) className += ' ' + derivedClassName;
    return <button className={className} {...attributes} ref={ref} />;
  }
);
