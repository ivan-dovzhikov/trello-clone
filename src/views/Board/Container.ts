import { connect, MapDispatchToProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { AppState } from 'utils';
import BoardPage from './Presentational';
import { createList, deleteList, changeList } from 'components/Lists/actions';
import {
  CreateListAction,
  DeleteListAction,
  ChangeListAction,
} from 'components/Lists/types';

const mapState = (
  { boards, lists }: AppState,
  { match }: RouteComponentProps<{ id: string }>
) => ({
  boardExist: !!boards.byId[match.params.id],
  lists: boards.byId[match.params.id]?.lists.map(listId => lists[listId]),
});

interface DispatchProps {
  onCreate: (title: string) => CreateListAction;
  onDelete: (listId: string) => DeleteListAction;
  onEdit: (listId: string, title: string) => ChangeListAction;
}
const mapDispatch: MapDispatchToProps<
  DispatchProps,
  RouteComponentProps<{ id: string }>
> = (dispatch, { match }) => ({
  onCreate: title => dispatch(createList(match.params.id, title)),
  onDelete: listId => dispatch(deleteList(match.params.id, listId)),
  onEdit: (listId, title) => dispatch(changeList(listId, title)),
});

export const connector = connect(mapState, mapDispatch);
export default connector(BoardPage);
