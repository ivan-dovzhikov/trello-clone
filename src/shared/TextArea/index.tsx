import React, { useState, forwardRef, useEffect } from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import './styles.scss';

export interface TextAreaProps extends TextareaAutosizeProps {
  labelValue?: string;
  isInvalid?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      labelValue = false,
      isInvalid = false,
      className: derivedClassName,
      value,
      ...attributes
    },
    ref
  ) => {
    const [hideLabel, setHideLabel] = useState(!!value);
    useEffect(() => {
      setHideLabel(!!value);
    }, [value]);

    let textAreaClassName = 'textarea';
    if (isInvalid) textAreaClassName += ' invalid';
    if (labelValue && hideLabel) textAreaClassName += ' hide-label';
    if (derivedClassName) textAreaClassName += ' ' + derivedClassName;

    const textAreaProps = {
      className: textAreaClassName,
      spellCheck: false,
      value,
      ...attributes,
      ref,
    };

    return (
      <div className="textarea-container">
        {labelValue ? (
          <label className="label">
            <span className={`label-value${hideLabel ? ' hide' : ''}`}>
              {labelValue}
            </span>
            <TextareaAutosize {...textAreaProps} ref={ref} />
          </label>
        ) : (
          <TextareaAutosize {...textAreaProps} ref={ref} />
        )}
      </div>
    );
  }
);
