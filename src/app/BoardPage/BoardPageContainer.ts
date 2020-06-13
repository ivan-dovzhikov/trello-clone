import { connect, MapStateToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { createList, deleteList, changeList, moveCard } from 'lists/actions';
import { CreateListAction, DeleteListAction, ListData } from 'lists/types';
import { MoveListAction } from 'boards/types';
import { moveList } from 'boards/actions';
import { AppState } from 'utils';
import BoardPage from './BoardPage';

interface StateProps {
  boardExist: boolean;
  lists: ListData[];
}

interface OwnProps extends RouteComponentProps<{ id: string }> {}

const mapState: MapStateToProps<StateProps, OwnProps, AppState> = (
  { boards, lists },
  { match }
) => ({
  boardExist: !!boards.byId[match.params.id],
  lists: boards.byId[match.params.id]?.lists.map(listId => lists[listId]) || [],
});

interface DispatchProps {
  onListCreate: (title: string) => CreateListAction;
  onListDelete: (
    listId: string
  ) => ThunkAction<DeleteListAction, AppState, void, DeleteListAction>;
  onListEdit: typeof changeList;
  onCardMove: typeof moveCard;
  onListMove: (fromIndex: number, toIndex: number) => MoveListAction;
}

const mapDispatch = (
  dispatch: ThunkDispatch<AppState, void, any>,
  { match }: OwnProps
): DispatchProps => ({
  onListCreate: title => dispatch(createList(match.params.id, title)),
  onListDelete: listId => dispatch(deleteList(match.params.id, listId)),
  onListEdit: (listId, title) => dispatch(changeList(listId, title)),
  onCardMove: (fromListId, toListId, fromIndex, toIndex) =>
    dispatch(moveCard(fromListId, toListId, fromIndex, toIndex)),
  onListMove: (fromIndex, toIndex) =>
    dispatch(moveList(match.params.id, fromIndex, toIndex)),
});

export const connector = connect(mapState, mapDispatch);
export default connector(BoardPage);
