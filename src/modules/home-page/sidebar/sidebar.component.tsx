import React, { FC } from 'react';
import * as styles from './sidebar.scss';
import classNames from 'classnames';
import { SidebarProps, useSidebarProps } from './sidebar.props';
import { hoc } from '@core';

/**
 * <Sidebar />
 */
const Sidebar = hoc(useSidebarProps, ({ sections, navigation }) => (
  <div className={styles.sidebar}>
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
));

export { Sidebar };
