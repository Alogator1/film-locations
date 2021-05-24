import React, { FC } from 'react';
import * as styles from './sidebar.scss';
import classNames from 'classnames';
import { SidebarProps, useSidebarProps } from './sidebar.props';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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

        <ExitToAppIcon
          style={{ width: '20px', height: '20px', marginLeft: '15px' }}
        />
      </div>
    </div>
  )
);

export { Sidebar };
