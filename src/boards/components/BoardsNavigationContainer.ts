import { connect, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from 'utils';
import { BoardData } from '../types';
import { createBoard, deleteBoard, changeBoard } from '../actions';
import BoardsNavigation from './BoardsNavigation';

interface StateProps {
  boards: BoardData[];
}

interface OwnProps {}

const mapState: MapStateToProps<StateProps, OwnProps, AppState> = ({
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

export const connector = connect<StateProps, DispatchProps, OwnProps, AppState>(
  mapState,
  mapDispatch
);
export default connector(BoardsNavigation);
