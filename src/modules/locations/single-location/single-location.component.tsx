import React, { FC } from 'react';
import * as styles from './single-location.scss';
import classNames from 'classnames';
import { useSingleLocationProps } from './single-location.props';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { hoc } from '@core';

/**
 * <SingleLocation />
 */
const SingleLocation = hoc(
  useSingleLocationProps,
  ({ location, onShowOnMapClick }) => (
    <div className={styles.singleLocation}>
      <div className={styles.filmBlock}>
        <img
          src={`https://source.unsplash.com/random/200x200?sig=${location?.id}`}
          className={styles.logo}
        />

        <div className={styles.filmInfo}>
          <p>FILM: {location?.film?.name?.toUpperCase()}</p>

          <p>COUNTRY: {location?.city?.country?.name.toUpperCase()}</p>
        </div>
      </div>

      <div className={styles.descriptionBlock}>{location?.description}</div>

      <div className={styles.openBlock} onClick={onShowOnMapClick}>
        <p>SHOW ON MAP</p>

        <ArrowForwardIcon style={{ height: '25px', width: '25px' }} />
      </div>
    </div>
  )
);

export { SingleLocation };
