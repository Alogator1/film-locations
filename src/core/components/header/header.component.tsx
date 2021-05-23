import React from 'react';
import * as styles from './header.scss';
import { useHeaderProps } from './header.props';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { hoc } from '@core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * <Header />
 */
const Header = hoc(useHeaderProps, ({ onGoBackClick, name }) => (
  <AppBar position='static' className={styles.wrapper}>
    <Toolbar className={styles.header}>
      <Typography variant='h3'>{name}</Typography>

      <div className={styles.right} onClick={onGoBackClick}>
        <IconButton aria-label='Go back' className={styles.backIcon}>
          <ArrowBackIcon className={styles.backIcon} color='inherit' />
        </IconButton>

        <Typography variant='h5' className={styles.goBack}>
          Go back
        </Typography>
      </div>
    </Toolbar>
  </AppBar>
));

export { Header };
