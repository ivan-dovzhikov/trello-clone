import React, {
  FC,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import { preventClickDefault } from 'utils';
import { Button, TextArea } from 'shared';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Done as SubmitIcon,
  Close as CancelIcon,
} from '@material-ui/icons';
import './styles.scss';

export interface FieldEditorProps {
  fieldName: string;
  value?: string;
  editMode: boolean;
  onSubmit: (title: any) => any;
  onDelete?: () => any;
  onEditToggle?: () => any;
}

export const FieldEditor: FC<FieldEditorProps> = ({
  fieldName,
  value = '',
  editMode,
  onSubmit,
  onDelete,
  onEditToggle,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isInvalid = !currentValue.trim();

  const toggleEdit = () => {
    setCurrentValue(value);
    if (onEditToggle) onEditToggle();
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.replace(/\r\n|\r|\n/gm, ' ');
    setCurrentValue(value);
  };

  const handleSubmit = () => {
    if (!currentValue.trim()) return;
    if (value !== currentValue) {
      value = currentValue;
      onSubmit(value);
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
    <form className="field-editor">
      <TextArea
        labelValue={fieldName}
        title={fieldName}
        isInvalid={isInvalid}
        value={currentValue}
        rowsMax={3}
        disabled={!editMode}
        required={true}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={textAreaRef}
      />
      <div className="buttons" onClick={preventClickDefault}>
        {editMode ? (
          <>
            <Button
              title="Submit"
              styleType={'fill'}
              onClick={handleSubmit}
              icon={true}
              disabled={isInvalid}
            >
              <SubmitIcon />
            </Button>
            <Button
              title="Cancel"
              styleType={'fill'}
              icon={true}
              onClick={toggleEdit}
            >
              <CancelIcon />
            </Button>
          </>
        ) : (
          <>
            <Button title="Edit" icon={true} onClick={toggleEdit}>
              <EditIcon />
            </Button>
            {onDelete && (
              <Button title="Delete" icon={true} onClick={onDelete}>
                <DeleteIcon />
              </Button>
            )}
          </>
        )}
      </div>
    </form>
  );
};
