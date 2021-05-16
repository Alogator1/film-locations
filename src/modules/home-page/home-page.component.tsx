import React, { FC } from 'react';
import * as styles from './home-page.scss';
import classNames from 'classnames';
import { HomePageProps, useHomePageProps } from './home-page.props';
import { Header } from './header';
import { Map } from './map';
import { Sidebar } from './sidebar';
import { hoc } from '@core';

/**
 * <HomePage />
 */
const HomePage = hoc(useHomePageProps, ({ showSidebar }) => (
  <div className={styles.homePage}>
    <Header />
    <div className={styles.content}>
      <Map />
      {showSidebar && <Sidebar />}
    </div>
  </div>
));

export { HomePage };
