import React, { FC } from 'react';
import * as styles from './film-base.scss';
import { Header } from '../../core/components/header';
import { hoc } from '@core';
import { useFilmBaseProps } from './film-base.props';
import { Search } from './search';
import { SingleFilm } from './single-film';

/**
 * <Locations />
 */
const FilmBase = hoc(useFilmBaseProps, ({ films, searchQuery }) => (
  <div className={styles.homePage}>
    <Header name={'Film Base'} />
    <div className={styles.content}>
      <Search />

      <div className={styles.locationList}>
        {films
          ?.filter(film =>
            film?.name
              ?.toUpperCase()
              ?.includes(searchQuery ? searchQuery.toUpperCase() : '')
          )
          ?.map(film => (
            <SingleFilm film={film} key={film?.id} />
          ))}
      </div>
    </div>
  </div>
));

export { FilmBase };
