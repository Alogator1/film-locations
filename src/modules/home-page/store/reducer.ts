import { reducer } from 'redux-chill';
import { changeSidebar, getLocations } from './actions';
import { HomeState } from './state';

const home = reducer(new HomeState())
  .on(changeSidebar, (state, isShow) => {
    state.showSidebar = isShow;
  })
  .on(getLocations.success, (state, locations) => {
    state.locations = locations;
  });

export { home };
