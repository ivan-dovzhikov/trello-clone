import { connect, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'utils';
import { Board } from '../types';
import { createBoard, deleteBoard, changeBoard } from '../actions';
import BoardsNavigation from './BoardsNavigation';

const mapState: MapStateToProps<{ boards: Board[] }, {}, AppState> = ({
  boards,
}) => {
  return { boards: boards.allIds.map(id => boards.byId[id]) };
};

interface DispatchProps {
  onCreate: typeof createBoard;
  onDelete: typeof deleteBoard;
  onEdit: typeof changeBoard;
}
const mapDispatch = (
  dispatch: ThunkDispatch<AppState, void, any>
): DispatchProps => ({
  onCreate: title => dispatch(createBoard(title)),
  onDelete: boardId => dispatch(deleteBoard(boardId)),
  onEdit: (boardId, title) => dispatch(changeBoard(boardId, title)),
});

export const connector = connect<
  { boards: Board[] },
  DispatchProps,
  {},
  AppState
>(mapState, mapDispatch);
export default connector(BoardsNavigation);
