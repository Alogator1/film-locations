import * as React from 'react';
import { AppProps } from './app.props';
import * as styles from './app.scss';
import { register } from '@core';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from '../home-page';
import { useDispatch } from 'react-redux';
import { getCountries, login } from '@home-page/store';
import { Locations } from '../locations';
import { LocationsCreate } from '../locations-create';
import { Login } from '../login';
import { useEffect } from 'react';
import { FilmBase } from '@film-base';
import { Registration } from '../registration';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({}) => {
  const dispatch = useDispatch();

  dispatch(getCountries());

  useEffect(() => {
    window.localStorage.getItem('user') &&
      dispatch(login.success(JSON.parse(window.localStorage.getItem('user'))));
  }, []);

  return (
    <div className={styles.app}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/locations/create' component={LocationsCreate} />
          <Route path='/locations' component={Locations} />
          <Route path='/filmbase' component={FilmBase} />
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <Route path='/' component={HomePage} />
        </Switch>
      </React.Suspense>
    </div>
  );
};

export { App };
