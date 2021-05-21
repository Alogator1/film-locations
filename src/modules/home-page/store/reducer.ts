import { reducer } from 'redux-chill';
import {
  changeSidebar,
  getLocations,
  setSearchQuery,
  setOpenedLocation
} from './actions';
import { HomeState } from './state';

const home = reducer(new HomeState())
  .on(changeSidebar, (state, isShow) => {
    state.showSidebar = isShow;
  })
  .on(getLocations.success, (state, locations) => {
    state.locations = locations;
  })
  .on(setOpenedLocation, (state, location) => {
    state.openLocation = location;
  })
  .on(setSearchQuery, (state, query) => {
    state.searchQuery = query;
  });

export { home };
