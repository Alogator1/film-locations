import { reducer } from 'redux-chill';
import {
  changeSidebar,
  getLocations,
  setSearchQuery,
  setOpenedLocation,
  getCommentsForLocation,
  getUserById,
  addComment,
  getCountries
} from './actions';
import { HomeState } from './state';

const home = reducer(new HomeState())
  .on(changeSidebar, (state, isShow) => {
    state.showSidebar = isShow;
  })
  .on(getLocations.success, (state, locations) => {
    state.locations = locations;
  })
  .on(getCountries.success, (state, countries) => {
    state.countries = countries;
  })
  .on(setOpenedLocation, (state, location) => {
    state.openLocation = location;
  })
  .on(getUserById.success, (state, user) => {
    state.user = user;
  })
  .on(getCommentsForLocation.success, (state, comments) => {
    state.locationComments = comments;
  })
  .on(addComment.success, (state, comment) => {
    state.locationComments.push(comment);
  })
  .on(setSearchQuery, (state, query) => {
    state.searchQuery = query;
  });

export { home };
