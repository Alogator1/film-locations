import * as React from 'react';
import { AppProps } from './app.props';
import * as styles from './app.scss';
import { register } from '@core';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../home-page';
import { useDispatch } from 'react-redux';
import { getUserById } from '@home-page/store';
// import { Map } from '../map/index';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({}) => {
  const dispatch = useDispatch();

  dispatch(getUserById(4));

  return (
    <div className={styles.app}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export { App };
