import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BoardLink, { BoardLinkProps } from './BoardLink';
import { BrowserRouter } from 'react-router-dom';

describe('Test board link', () => {
  const setup = () => {
    const props: BoardLinkProps = {
      id: '1234-5678',
      title: 'board title',
      onDelete: jest.fn(),
      onEdit: jest.fn(),
    };

    render(
      <BrowserRouter>
        <BoardLink {...props} />
      </BrowserRouter>
    );

    return {
      getTextarea: () => screen.getByRole('textbox'),
      getEditButton: () => screen.getByRole('button', { name: 'Edit' }),
      getDeleteButton: () => screen.getByRole('button', { name: 'Delete' }),
      getSubmitButton: () => screen.getByRole('button', { name: 'Submit' }),
      getCancelButton: () => screen.getByRole('button', { name: 'Cancel' }),
      link: screen.getByRole('link') as HTMLAnchorElement,
      ...props,
    };
  };

  it('should render link', () => {
    const { link } = setup();
    expect(link).toBeInTheDocument();
  });

  it('link should lead to boards/:id', () => {
    const { link, id } = setup();
    expect(link).toHaveAttribute('href', `/boards/${id}`);
  });

  it('should contain board title', () => {
    const { title } = setup();
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should display form on edit click', () => {
    const { getTextarea, getEditButton } = setup();
    userEvent.click(getEditButton());
    expect(getTextarea()).toBeInTheDocument();
  });

  it('should display link back on cancel click', () => {
    const { getEditButton, getCancelButton } = setup();
    userEvent.click(getEditButton());
    userEvent.click(getCancelButton());
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  describe('test passed functions to be called on events', () => {
    it('should call onDelete with id', () => {
      const { id, onDelete, getDeleteButton } = setup();
      userEvent.click(getDeleteButton());
      expect(onDelete).toBeCalledWith(id);
    });

    it('should call onEdit with typed value and id', () => {
      const {
        id,
        onEdit,
        getEditButton,
        getTextarea,
        getSubmitButton,
      } = setup();

      userEvent.click(getEditButton());
      const typedValue = 'shh...';
      userEvent.type(getTextarea(), typedValue);
      userEvent.click(getSubmitButton());
      expect(onEdit).toBeCalledWith(id, typedValue);
    });
  });
});
