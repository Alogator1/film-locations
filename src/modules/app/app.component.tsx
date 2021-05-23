import * as React from 'react';
import { AppProps } from './app.props';
import * as styles from './app.scss';
import { register } from '@core';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../home-page';
import { useDispatch } from 'react-redux';
import { getCountries, getUserById } from '@home-page/store';
import { Locations } from '../locations';
import { LocationsCreate } from '../locations-create';
// import { Map } from '../map/index';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({}) => {
  const dispatch = useDispatch();

  dispatch(getUserById(4));

  dispatch(getCountries());

  return (
    <div className={styles.app}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/locations/create' component={LocationsCreate} />
          <Route path='/locations' component={Locations} />
          <Route path='/' component={HomePage} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export { App };
