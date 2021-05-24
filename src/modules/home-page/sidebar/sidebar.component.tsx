import React, { FC } from 'react';
import * as styles from './sidebar.scss';
import classNames from 'classnames';
import { SidebarProps, useSidebarProps } from './sidebar.props';
import { hoc } from '@core';

/**
 * <Sidebar />
 */
const Sidebar = hoc(
  useSidebarProps,
  ({ sections, navigation, user, onLoginClick }) => (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={styles.section}
            onClick={() => {
              navigation(section.to);
            }}
          >
            {section.name}
          </div>
        ))}
      </div>

      <div className={styles.sectionLogout} onClick={onLoginClick}>
        {user ? 'Log out' : 'Log in'}
      </div>
    </div>
  )
);

export { Sidebar };
