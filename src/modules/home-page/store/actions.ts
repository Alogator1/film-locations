import { Location } from '@api';
import { make } from 'redux-chill';

const changeSidebar = make('[home] change sidebar').stage(
  (isShow: boolean) => isShow
);

const getLocations = make('[home] get locations')
  .stage((query?: string) => query)
  .stage('success', (locations: Location[]) => locations);

export { changeSidebar, getLocations };
