import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { AppState } from 'utils';
import BoardPage from './BoardPage';
import { createList, deleteList, changeList, moveCard } from 'lists/actions';
import { CreateListAction, DeleteListAction } from 'lists/types';
import { MoveListAction } from 'boards/types';
import { moveList } from 'boards/actions';

interface OwnProps extends RouteComponentProps<{ id: string }> {}

const mapState = ({ boards, lists }: AppState, { match }: OwnProps) => ({
  boardExist: !!boards.byId[match.params.id],
  lists: boards.byId[match.params.id]?.lists.map(listId => lists[listId]),
});

interface DispatchProps {
  onCreate: (title: string) => CreateListAction;
  onDelete: (
    listId: string
  ) => ThunkAction<DeleteListAction, AppState, void, DeleteListAction>;
  onEdit: typeof changeList;
  onCardMove: typeof moveCard;
  onListMove: (fromIndex: number, toIndex: number) => MoveListAction;
}

const mapDispatch = (
  dispatch: ThunkDispatch<AppState, void, any>,
  { match }: OwnProps
): DispatchProps => ({
  onCreate: title => dispatch(createList(match.params.id, title)),
  onDelete: listId => dispatch(deleteList(match.params.id, listId)),
  onEdit: (listId, title) => dispatch(changeList(listId, title)),
  onCardMove: (fromListId, toListId, fromIndex, toIndex) =>
    dispatch(moveCard(fromListId, toListId, fromIndex, toIndex)),
  onListMove: (fromIndex, toIndex) =>
    dispatch(moveList(match.params.id, fromIndex, toIndex)),
});

export const connector = connect(mapState, mapDispatch);
export default connector(BoardPage);
