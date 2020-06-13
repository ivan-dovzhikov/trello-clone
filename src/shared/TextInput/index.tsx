import React, { ChangeEvent, useState, forwardRef } from 'react';
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
      onChange,
      value,
      ...attributes
    },
    ref
  ) => {
    const [hideLabel, setHideLabel] = useState(!!value);
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setHideLabel(!!event.target.value);
      if (typeof onChange === 'function') onChange(event);
    };

    let textAreaClassName = 'textarea';
    if (labelValue && hideLabel) textAreaClassName += ' hide-label';
    if (isInvalid) textAreaClassName += ' invalid';
    if (attributes.disabled) textAreaClassName += ' disabled';
    if (derivedClassName) textAreaClassName += ' ' + derivedClassName;

    const textAreaProps = {
      className: textAreaClassName,
      spellCheck: false,
      value,
      ...attributes,
      onChange: handleChange,
      ref,
    };

    return (
      <div className="textarea-container">
        {labelValue ? (
          <label className="label">
            <span className={`label-value${hideLabel ? ' hide' : ''}`}>
              {labelValue}
            </span>
            <TextareaAutosize {...textAreaProps} />
            <div className="underline" />
          </label>
        ) : (
          <>
            <TextareaAutosize {...textAreaProps} />
            <div className="underline" />
          </>
        )}
      </div>
    );
  }
);
