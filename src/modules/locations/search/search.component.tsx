import React, { FC } from 'react';
import * as styles from './search.scss';
import classNames from 'classnames';
import { useSearchProps } from './search.props';
import { Form } from '@core/form';
import { Field } from '@core/components/field';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { hoc } from '@core';

/**
 * <Search />
 */
const Search = hoc(useSearchProps, ({ form, onCreateLocationClick }) => (
  <div className={styles.search}>
    <Form use={form} className={styles.form}>
      <div />
      <Field.Input
        name='query'
        placeholder='Search...'
        className={styles.input}
        after={
          <IconButton
            className={styles.iconButton}
            aria-label='search'
            onClick={() => {
              form.handleSubmit();
            }}
          >
            <SearchIcon />
          </IconButton>
        }
      />
    </Form>

    <div className={styles.createButton}>
      <Button
        variant='contained'
        color='primary'
        onClick={onCreateLocationClick}
      >
        Create location
      </Button>
    </div>
  </div>
));

export { Search };
