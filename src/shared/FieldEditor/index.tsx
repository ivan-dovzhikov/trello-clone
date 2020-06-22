import React, {
  FC,
  useState,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from 'react';
import { useIntl } from 'react-intl';
import { preventClickDefault } from 'utils';
import { Button, TextArea } from 'shared';
import {
  EditOutlined as EditIcon,
  DeleteOutlineRounded as DeleteIcon,
  DoneRounded as SubmitIcon,
  CloseRounded as CancelIcon,
} from '@material-ui/icons';
import './styles.scss';

export interface FieldEditorProps {
  fieldName: string;
  value?: string;
  displayOnViewMode?: string;
  titles?: {
    submit?: string;
    cancel?: string;
    delete?: string;
    edit?: string;
  };
  initialEditMode?: boolean;
  editMode?: boolean;
  onEditToggle?: () => any;
  useIconToggler?: boolean;
  exitOnSubmit?: boolean;
  onSubmit: (value: string) => any;
  onDelete?: () => any;
}

export const FieldEditor: FC<FieldEditorProps> = ({
  fieldName,
  value = '',
  displayOnViewMode,
  titles,
  initialEditMode = false,
  editMode: derivedEditMode,
  onEditToggle,
  useIconToggler = false,
  exitOnSubmit = true,
  onSubmit,
  onDelete,
}) => {
  const intl = useIntl();
  const [editMode, setEditMode] = useState(derivedEditMode ?? initialEditMode);
  const [currentValue, setCurrentValue] = useState(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isInvalid = !currentValue.trim();

  const toggleEdit = useCallback(
    (e?: ReactMouseEvent<HTMLElement>) => {
      e?.preventDefault();
      setEditMode(!editMode);
      setCurrentValue(value);
      if (onEditToggle) onEditToggle();
    },
    [value, editMode, onEditToggle]
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.replace(/\r\n|\r|\n/gm, ' ');
    setCurrentValue(value);
  };

  const handleSubmit = () => {
    if (isInvalid) return;

    const trimmedCurrentValue = currentValue.trim();
    if (value !== trimmedCurrentValue) {
      onSubmit(trimmedCurrentValue);
    }

    if (exitOnSubmit) toggleEdit();
    else setCurrentValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') toggleEdit();
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (!editMode) return;
    textAreaRef.current?.focus();
    const clickHandler = ({ target }: MouseEvent) => {
      if (!(target as HTMLElement)?.closest('.field-editor.edit')) toggleEdit();
    };
    const focusHandler = ({ target }: FocusEvent) => {
      if (!(target as HTMLElement)?.closest('.field-editor.edit')) toggleEdit();
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('focusin', focusHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('focusin', focusHandler);
    };
  }, [editMode, toggleEdit]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const editTitle = titles?.edit || intl.formatMessage({ id: 'edit' });
  const submitTitle = titles?.submit || intl.formatMessage({ id: 'submit' });
  const cancelTitle = titles?.cancel || intl.formatMessage({ id: 'cancel' });
  const deleteTitle = titles?.delete || intl.formatMessage({ id: 'delete' });

  return (
    <form className={`field-editor${editMode ? ' edit' : ''}`}>
      {/* disabled textarea ignores clicks */}
      {!editMode && !useIconToggler && (
        <button
          className="click-overlay"
          onClick={toggleEdit}
          title={editTitle}
        />
      )}
      <div className="field-editor-textarea-container">
        <TextArea
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
        {!editMode && useIconToggler && (
          <Button
            title={editTitle}
            className="field-editor-button edit-button"
            onClick={toggleEdit}
          >
            <EditIcon fontSize="inherit" />
          </Button>
        )}
      </div>
      <div className="buttons-container" onClick={preventClickDefault}>
        {editMode && (
          <>
            <div>
              <Button
                title={submitTitle}
                className="field-editor-button submit-button"
                onClick={handleSubmit}
                disabled={isInvalid}
              >
                <SubmitIcon fontSize="inherit" />
              </Button>
              <Button
                title={cancelTitle}
                className="field-editor-button"
                onClick={toggleEdit}
              >
                <CancelIcon fontSize="inherit" />
              </Button>
            </div>
            {onDelete && (
              <Button
                title={deleteTitle}
                className="field-editor-button"
                onClick={onDelete}
              >
                <DeleteIcon fontSize="inherit" />
              </Button>
            )}
          </>
        )}
      </div>
    </form>
  );
};
