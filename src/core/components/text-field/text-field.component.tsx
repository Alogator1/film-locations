import React, { FC } from 'react';
import * as styles from './input.scss';
import classNames from 'classnames';
import { TextFieldProps } from './text-field.props';
import { TextField as MaterialTextField } from '@material-ui/core';

/**
 * <TextField />
 */
const TextField: FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  isError,
  error,
  type
}) => (
  <MaterialTextField
    variant='outlined'
    margin='normal'
    value={value}
    onChange={event => {
      onChange(event?.target?.value);
    }}
    fullWidth
    label={label}
    autoComplete={type == 'password' ? 'password' : 'email'}
    autoFocus
    type={type == 'password' ? 'password' : 'text'}
    error={isError}
    helperText={isError && error}
  />
);

export { TextField };
