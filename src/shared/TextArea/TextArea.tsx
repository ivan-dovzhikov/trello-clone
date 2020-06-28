import React, { useState, forwardRef, useEffect } from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import './TextArea.scss';

export interface TextAreaProps extends TextareaAutosizeProps {
  labelValue?: string;
  isInvalid?: boolean;
  containerClassName?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      labelValue = false,
      isInvalid = false,
      containerClassName = '',
      className: derivedClassName = '',
      value,
      ...attributes
    },
    ref
  ) => {
    const [hideLabel, setHideLabel] = useState(!!value);

    useEffect(() => {
      setHideLabel(!!value);
    }, [value]);

    const textAreaProps = {
      className: `textarea__textarea${
        isInvalid ? '--invalid' : ''
      } ${derivedClassName}`,
      spellCheck: false,
      value,
      ...attributes,
      ref,
    };

    return (
      <div className={`textarea__container ${containerClassName}`}>
        {labelValue ? (
          <label className="textarea__label">
            <span
              className={`textarea__label-value${hideLabel ? '--hide' : ''}`}
            >
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
