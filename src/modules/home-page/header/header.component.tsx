import React, { FC } from 'react';
import * as styles from './header.scss';
import classNames from 'classnames';
import { HeaderProps, useHeaderProps } from './header.props';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Field } from '@core/components/field';
import { hoc } from '@core';
import { Form } from '@core/form';

/**
 * <Header />
 */
const Header = hoc(useHeaderProps, ({ form, query, hideSidebar }) => (
  <AppBar position='static' className={styles.wrapper}>
    <Toolbar className={styles.header}>
      <Typography variant='h3'>Home page</Typography>
    </Toolbar>

    <Form use={form} className={styles.form}>
      <Field.Input
        name='query'
        placeholder='Search...'
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

    <IconButton
      aria-label='menu'
      className={styles.menuIcon}
      onClick={hideSidebar}
    >
      <MenuIcon fontSize='large' />
    </IconButton>
  </AppBar>
));

export { Header };
