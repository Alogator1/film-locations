import React, { FC } from 'react';
import * as styles from './autocomplete.scss';
import classNames from 'classnames';
import { MyAutocompleteProps } from './autocomplete.props';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

/**
 * <MyAutocomplete />
 */
const MyAutocomplete: FC<MyAutocompleteProps> = ({
  placeholder,
  before,
  after,
  value,
  onChange,
  className,
  id
}) => (
  <Autocomplete
    id='combo-box-demo'
    options={[
      { title: 'jopa' },
      { title: 'jopa2' },
      { title: 'jopa3' },
      { title: 'jopa4' }
    ]}
    getOptionLabel={option => option?.title}
    onChange={(event, values) => onChange(values)}
    style={{ width: 300 }}
    renderInput={params => (
      <TextField {...params} label='Combo box' variant='outlined' />
    )}
  />
);

export { MyAutocomplete };
