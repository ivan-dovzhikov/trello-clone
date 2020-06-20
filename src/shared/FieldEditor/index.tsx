import React, {
  FC,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
} from 'react';
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
  displayOnViewMode?: string;
  value?: string;
  initialEditMode?: boolean;
  editMode?: boolean;
  useIconToggler?: boolean;
  onSubmit: (title: any) => any;
  onDelete?: () => any;
  onEditToggle?: () => any;
}

export const FieldEditor: FC<FieldEditorProps> = ({
  fieldName,
  displayOnViewMode,
  value = '',
  initialEditMode = false,
  editMode: derivedEditMode,
  useIconToggler = false,
  onSubmit,
  onDelete,
  onEditToggle,
}) => {
  const [editMode, setEditMode] = useState(derivedEditMode ?? initialEditMode);
  const [currentValue, setCurrentValue] = useState(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isInvalid = !currentValue.trim();

  const toggleEdit = (e?: MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    setCurrentValue(value);
    setEditMode(!editMode);
    if (onEditToggle) onEditToggle();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.replace(/\r\n|\r|\n/gm, ' ');
    setCurrentValue(value);
  };

  const handleSubmit = () => {
    const trimmedCurrentValue = currentValue.trim();
    if (!trimmedCurrentValue) return;
    if (value !== trimmedCurrentValue) {
      value = trimmedCurrentValue;
      onSubmit(trimmedCurrentValue);
    }
    toggleEdit();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Escape') toggleEdit();
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (editMode) textAreaRef.current?.focus();
  }, [editMode]);

  return (
    <form className={`field-editor${editMode ? ' edit' : ''}`}>
      {/* disabled textarea ignores clicks */}
      {!editMode && !useIconToggler && (
        <button className="click-overlay" onClick={toggleEdit} title="Edit" />
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
            title="Edit"
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
                title="Submit"
                className="field-editor-button submit-button"
                onClick={handleSubmit}
                disabled={isInvalid}
              >
                <SubmitIcon fontSize="inherit" />
              </Button>
              <Button
                className="field-editor-button"
                title="Cancel"
                onClick={toggleEdit}
              >
                <CancelIcon fontSize="inherit" />
              </Button>
            </div>
            {onDelete && (
              <Button
                className="field-editor-button"
                title="Delete"
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
