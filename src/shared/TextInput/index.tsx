import React, { ChangeEvent, useState, forwardRef } from 'react';
import { TextareaAutosize, TextareaAutosizeProps } from '@material-ui/core';
import './styles.scss';

interface TextAreaProps extends TextareaAutosizeProps {
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

    let containerClassName = 'textarea';
    if (labelValue && hideLabel) containerClassName += ' hide-label';
    if (isInvalid) containerClassName += ' invalid';
    if (attributes.disabled) containerClassName += ' disabled';
    if (derivedClassName) containerClassName += ' ' + derivedClassName;

    const textAreaProps = {
      className: containerClassName,
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
