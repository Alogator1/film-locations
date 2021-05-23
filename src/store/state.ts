import { app } from './reducer';
import { combineReducers } from 'redux';
import { router } from './router';
import { HomeState } from 'src/modules/home-page/store';
import { CreateLocationState } from 'src/modules/locations-create/store';

/**
 * App state
 */
type State = {
  router: ReturnType<typeof router>;
  home: HomeState;
  createLocation: CreateLocationState;
};

export { State };
