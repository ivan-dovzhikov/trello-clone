import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { BoardsState } from './types';
import { AppState } from 'utils';
import { createBoard, deleteBoard, changeBoard } from './actions';
import List from './Presentational';

const mapState: MapStateToProps<BoardsState, {}, AppState> = ({ boards }) =>
  boards;

interface DispatchProps {
  onCreate: typeof createBoard;
  onDelete: typeof deleteBoard;
  onChange: typeof changeBoard;
}
const mapDispatch: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
  onCreate: title => dispatch(createBoard(title)),
  onDelete: boardId => dispatch(deleteBoard(boardId)),
  onChange: (boardId, title) => dispatch(changeBoard(boardId, title)),
});

export const connector = connect<BoardsState, DispatchProps, {}, AppState>(
  mapState,
  mapDispatch
);
export default connector(List);
