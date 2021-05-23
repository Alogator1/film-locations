import React, { FC } from 'react';
import * as styles from './point.scss';
import classNames from 'classnames';
import { PointProps, usePointProps } from './point.props';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { IconButton } from '@material-ui/core';
import { hoc } from '@core';

/**
 * <Point />
 */
const Point = hoc(usePointProps, ({ name, onPointClick }) => (
  <IconButton
    aria-label='menu'
    className={styles.dot}
    disableRipple
    disableTouchRipple
    onClick={onPointClick}
  >
    <LocationOnIcon fontSize='large' />
    <span className={styles.text}>{name}</span>
  </IconButton>
));

export { Point };
