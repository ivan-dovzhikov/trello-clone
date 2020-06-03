import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { FieldEditor } from '.';

describe('Test FieldEditor component', () => {
  const setup = (editMode: boolean, initialValue: string = '') => {
    const history = createMemoryHistory();
    const onSubmit = jest.fn();
    const onDelete = jest.fn();
    const onEditToggle = jest.fn();
    render(
      <Router history={history}>
        <FieldEditor
          fieldName="test"
          value={initialValue}
          onSubmit={onSubmit}
          onDelete={onDelete}
          editMode={editMode}
          onEditToggle={onEditToggle}
        />
      </Router>
    );

    return {
      textarea: screen.getByRole('textbox') as HTMLTextAreaElement,
      onSubmit,
      onDelete,
      onEditToggle,
    };
  };

  it('should render textarea', () => {
    const { textarea } = setup(true);
    expect(textarea).toBeInTheDocument();
  });

  it('should render textarea with given initial value', () => {
    const initialValue = 'initial';
    const { textarea } = setup(true, initialValue);
    expect(textarea).toHaveValue(initialValue);
  });

  describe('test submit button', () => {
    it('should render button', () => {
      setup(true);
      expect(screen.getByTitle('Submit')).toBeInTheDocument();
    });

    it('should call onSubmit when clicked', () => {
      const { textarea, onSubmit } = setup(true);
      const submitButton = screen.getByTitle('Submit');
      const typedValue = 'whatever';
      userEvent.type(textarea, typedValue);
      userEvent.click(submitButton);
      expect(onSubmit).toBeCalledWith(typedValue);
    });
  });

  describe('test cancel button', () => {
    it('should render button', () => {
      setup(true);
      expect(screen.getByTitle('Cancel')).toBeInTheDocument();
    });

    it('should call onEdit toggle when clicked', () => {
      const { onEditToggle } = setup(true);
      const cancelButton = screen.getByTitle('Cancel');
      userEvent.click(cancelButton);
      expect(onEditToggle).toBeCalled();
    });
  });

  describe('test edit button', () => {
    it('should render button', () => {
      setup(false);
      expect(screen.getByTitle('Edit')).toBeInTheDocument();
    });

    it('should call onEdit toggle when clicked', () => {
      const { onEditToggle } = setup(false);
      const editButton = screen.getByTitle('Edit');
      userEvent.click(editButton);
      expect(onEditToggle).toBeCalled();
    });
  });

  describe('test delete button', () => {
    it('should render button', () => {
      setup(false);
      expect(screen.getByTitle('Delete')).toBeInTheDocument();
    });

    it('should call onDelete when clicked', () => {
      const { onDelete } = setup(false);
      const deleteButton = screen.getByTitle('Delete');
      userEvent.click(deleteButton);
      expect(onDelete).toBeCalled();
    });
  });

  describe('test typing behavior', () => {
    it('should have typed value', () => {
      const { textarea } = setup(true);

      const typedValue = 'whatever';
      userEvent.type(textarea, typedValue);

      expect(textarea).toHaveValue(typedValue);
    });

    it('should prevent typing line break and put whitespace instead', () => {
      const { textarea } = setup(true);

      userEvent.type(textarea, 'line\nbreak');

      expect(textarea).toHaveValue('line break');
    });

    it('should call onSubmit on Enter', () => {
      const { textarea, onSubmit } = setup(true, 'placeholder');

      const typedValue = 'TypedValue';
      userEvent.type(textarea, typedValue);
      fireEvent.keyDown(textarea, {
        charCode: 13,
        code: 13,
        key: 'Enter',
        keyCode: 13,
      });

      expect(onSubmit).toBeCalledWith(typedValue);
    });

    it('should exit edit mode on Escape', () => {
      const { textarea, onEditToggle } = setup(true, 'placeholder');

      fireEvent.keyDown(textarea, {
        charCode: 27,
        code: 27,
        key: 'Escape',
        keyCode: 27,
      });

      expect(onEditToggle).toBeCalled();
    });
  });
});
