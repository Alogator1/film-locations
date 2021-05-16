import { HomeSaga } from 'src/modules/home-page/store';
import { RouterSaga } from './router';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new HomeSaga()];

export { sagas };
