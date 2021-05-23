import React, { FC } from 'react';
import * as styles from './locations.scss';
import { Header } from '../../core/components/header';
import { hoc } from '@core';
import { useLocationsProps } from './locations.props';
import { Search } from './search';

/**
 * <Locations />
 */
const Locations = hoc(useLocationsProps, ({}) => (
  <div className={styles.homePage}>
    <Header name={'Locations'} />
    <div className={styles.content}>
      <Search />
    </div>
  </div>
));

export { Locations };
