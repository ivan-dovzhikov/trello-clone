import React, { forwardRef, ComponentProps } from 'react';
import './styles.scss';

export const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className: derivedClassName = '', ...attributes }, ref) => {
    let className = 'button';
    if (derivedClassName) className += ' ' + derivedClassName;
    return <button className={className} {...attributes} ref={ref} />;
  }
);
