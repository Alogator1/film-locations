import { HomeSaga } from 'src/modules/home-page/store';
import { CreateLocationSaga } from 'src/modules/locations-create/store';
import { RouterSaga } from './router';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new HomeSaga(), new CreateLocationSaga()];

export { sagas };
