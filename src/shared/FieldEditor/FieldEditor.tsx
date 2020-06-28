import React, {
  FC,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { useIntl } from 'react-intl';
import {
  preventDefault,
  useCallbackOnExternalAction,
  removeLineBreaks,
  useSwitchWithCallback,
  AnyFunction,
} from 'utils';
import { Button, TextArea } from 'shared';
import {
  EditOutlined as EditIcon,
  DeleteOutlineRounded as DeleteIcon,
  DoneRounded as SubmitIcon,
  CloseRounded as CancelIcon,
} from '@material-ui/icons';
import './FieldEditor.scss';

interface Titles {
  submit?: string;
  cancel?: string;
  delete?: string;
  edit?: string;
}

export interface FieldEditorProps {
  className?: string;
  fieldName: string;
  value?: string;
  displayOnViewMode?: string;
  titles?: Titles;
  initialEditMode?: boolean;
  onEditToggle?: AnyFunction;
  iconToggle?: boolean;
  exitOnSubmit?: boolean;
  onSubmit: AnyFunction;
  onDelete?: AnyFunction;
  textareaClassName?: string;
  textareaContainerClassName?: string;
}

export const FieldEditor: FC<FieldEditorProps> = ({
  className = '',
  fieldName,
  value = '',
  displayOnViewMode,
  titles,
  initialEditMode = false,
  onEditToggle,
  iconToggle = false,
  exitOnSubmit = true,
  onSubmit,
  onDelete,
  textareaClassName,
  textareaContainerClassName,
}) => {
  const intl = useIntl();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [editMode, enterEditMode, exitEditMode] = useSwitchWithCallback(
    initialEditMode,
    onEditToggle
  );
  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentValue(removeLineBreaks(e.target.value));
  };
  const isInvalid = !currentValue.trim();

  const handleSubmit = () => {
    if (isInvalid) return;

    const trimmedCurrentValue = currentValue.trim();
    if (value !== trimmedCurrentValue) {
      onSubmit(trimmedCurrentValue);
    }

    if (exitOnSubmit) exitEditMode();
    else setCurrentValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') exitEditMode();
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (editMode) textAreaRef.current?.focus();
  }, [editMode]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value, editMode]);

  useCallbackOnExternalAction(formRef.current, exitEditMode, editMode);

  const editTitle = titles?.edit || intl.formatMessage({ id: 'edit' });
  const submitTitle = titles?.submit || intl.formatMessage({ id: 'submit' });
  const cancelTitle = titles?.cancel || intl.formatMessage({ id: 'cancel' });
  const deleteTitle = titles?.delete || intl.formatMessage({ id: 'delete' });

  return (
    <div
      className={`field-editor${editMode ? '--edit' : ''} ${className}`}
      ref={formRef}
    >
      <div className="field-editor__textarea-container">
        <TextArea
          containerClassName={textareaContainerClassName}
          className={textareaClassName}
          labelValue={fieldName}
          title={editMode ? fieldName : undefined}
          isInvalid={isInvalid}
          value={
            displayOnViewMode && !editMode ? displayOnViewMode : currentValue
          }
          rowsMax={3}
          disabled={!editMode}
          required={true}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={textAreaRef}
        />
        <div className="default-prevention-boundary" onClick={preventDefault}>
          {!editMode &&
            (iconToggle ? (
              <Button
                styleType="plain"
                className="field-editor__button-edit"
                title={editTitle}
                onClick={enterEditMode}
              >
                <EditIcon fontSize="inherit" />
              </Button>
            ) : (
              // disabled textarea ignores clicks
              <button
                className="field-editor__click-overlay"
                title={editTitle}
                onClick={enterEditMode}
              />
            ))}
        </div>
      </div>
      <div className="field-editor__buttons-container">
        {editMode && (
          <>
            <div>
              <Button
                styleType="plain"
                className="field-editor__button-submit"
                title={submitTitle}
                onClick={handleSubmit}
                disabled={isInvalid}
              >
                <SubmitIcon fontSize="inherit" />
              </Button>
              <Button
                styleType="plain"
                className="field-editor__button"
                title={cancelTitle}
                onClick={exitEditMode}
              >
                <CancelIcon fontSize="inherit" />
              </Button>
            </div>
            {onDelete && (
              <Button
                styleType="plain"
                className="field-editor__button"
                title={deleteTitle}
                onClick={onDelete}
              >
                <DeleteIcon fontSize="inherit" />
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
