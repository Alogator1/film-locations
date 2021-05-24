import React, { FC } from 'react';
import * as styles from './single-film.scss';
import { SingleFilmProps } from './single-film.props';

/**
 * <SingleLocation />
 */
const SingleFilm: FC<SingleFilmProps> = ({ film }) => (
  <div className={styles.singleLocation}>
    <div className={styles.filmBlock}>
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${film?.id}`}
        className={styles.logo}
      />

      <div className={styles.filmInfo}>
        <p>GENRE: {film?.genre?.name?.toUpperCase()}</p>

        <p>DIRECTOR: {film?.director?.toUpperCase()}</p>
      </div>
    </div>

    <div className={styles.descriptionBlock}>{film?.name?.toUpperCase()}</div>
  </div>
);

export { SingleFilm };
