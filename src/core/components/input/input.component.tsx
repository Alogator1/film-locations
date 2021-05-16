import React, { FC } from 'react';
import * as styles from './input.scss';
import classNames from 'classnames';
import { InputProps } from './input.props';
import {
  IconButton,
  Input as MaterialInput,
  InputBase,
  Paper,
  TextField
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

/**
 * <Input />
 */
const Input: FC<InputProps> = ({
  placeholder,
  before,
  after,
  value,
  onChange,
  id
}) => (
  <Paper className={styles.root}>
    <InputBase
      className={styles.input}
      id={id}
      inputProps={{ className: styles.input }}
      placeholder={placeholder}
      value={value}
      onChange={e => {
        onChange(e?.target?.value);
      }}
    />
    {after && after}
  </Paper>
);

export { Input };
