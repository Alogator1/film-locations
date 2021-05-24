import { reducer } from 'redux-chill';
import {
  changeSidebar,
  getLocations,
  setSearchQuery,
  setOpenedLocation,
  getCommentsForLocation,
  login,
  addComment,
  getCountries,
  deleteComment,
  setMapCenter,
  setFilmSearchQuery
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
  .on(login.success, (state, user) => {
    state.user = user;
  })
  .on(setMapCenter, (state, coordinates) => {
    state.mapDefaultZoom = coordinates;
  })
  .on(getCommentsForLocation.success, (state, comments) => {
    state.locationComments = comments;
  })
  .on(addComment.success, (state, comment) => {
    state.locationComments.push(comment);
  })
  .on(setSearchQuery, (state, query) => {
    state.searchQuery = query;
  })
  .on(setFilmSearchQuery, (state, query) => {
    state.filmSearchQuery = query;
  });

export { home };
