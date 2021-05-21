import { Location } from '@api';
import { make } from 'redux-chill';

const changeSidebar = make('[home] change sidebar').stage(
  (isShow: boolean) => isShow
);

const getLocations = make('[home] get locations')
  .stage((query?: string) => query)
  .stage('success', (locations: Location[]) => locations);

const setSearchQuery = make('[home] set search query').stage(
  (query?: string) => query
);

const setOpenedLocation = make('[home] set opened location').stage(
  (location?: Location) => location
);

export { changeSidebar, getLocations, setSearchQuery, setOpenedLocation };
