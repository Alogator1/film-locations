import React, { FC } from 'react';
import * as styles from './locations.scss';
import { Header } from '../../core/components/header';
import { hoc } from '@core';
import { useLocationsProps } from './locations.props';
import { Search } from './search';
import { SingleLocation } from './single-location';

/**
 * <Locations />
 */
const Locations = hoc(useLocationsProps, ({ locations, searchQuery }) => (
  <div className={styles.homePage}>
    <Header name={'Locations'} />
    <div className={styles.content}>
      <Search />

      <div className={styles.locationList}>
        {locations
          ?.filter(location =>
            location?.film?.name
              ?.toUpperCase()
              ?.includes(searchQuery ? searchQuery.toUpperCase() : '')
          )
          ?.map(location => (
            <SingleLocation location={location} key={location?.id} />
          ))}
      </div>
    </div>
  </div>
));

export { Locations };
