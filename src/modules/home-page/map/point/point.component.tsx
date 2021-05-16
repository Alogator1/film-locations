import React, { FC } from 'react';
import * as styles from './point.scss';
import classNames from 'classnames';
import { PointProps } from './point.props';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { IconButton } from '@material-ui/core';

/**
 * <Point />
 */
const Point: FC<PointProps> = ({ name }) => (
  <IconButton
    aria-label='menu'
    className={styles.dot}
    disableRipple
    disableTouchRipple
  >
    <LocationOnIcon fontSize='large' />
    {name}
  </IconButton>
);

export { Point };
