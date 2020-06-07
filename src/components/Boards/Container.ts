import { connect, MapStateToProps } from 'react-redux';
import { Board } from './types';
import { AppState } from 'utils';
import { createBoard, deleteBoard, changeBoard } from './actions';
import BoardsNavigation from './Presentational';
import { ThunkDispatch } from 'redux-thunk';

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
