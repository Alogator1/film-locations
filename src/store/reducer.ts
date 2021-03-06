import { router } from './router';
import { general } from './general';
import { createLocation } from './../modules/locations-create';
import { home } from '../modules/home-page/store';

const app = {
  router,
  general,
  home,
  createLocation
};

export { app };
