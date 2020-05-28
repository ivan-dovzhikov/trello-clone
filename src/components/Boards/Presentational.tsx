import React, { FC } from 'react';
import { ConnectedProps } from 'react-redux';
import './styles.scss';
import { connector } from './Container';

type ListProps = ConnectedProps<typeof connector>;
const List: FC<ListProps> = ({
  byId,
  allIds,
  onCreate,
  onDelete,
  onChange,
}) => {
  return <ul className="boards-list"></ul>;
};

export default List;
