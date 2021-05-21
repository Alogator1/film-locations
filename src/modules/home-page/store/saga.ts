import { Location } from '../../../api/models';
import { Called } from '@core/utils';
import { State } from '@store';
import { StoreContext } from '@store/context';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import { getLocations } from './actions';

class HomeSaga {
  @Saga(getLocations)
  public *getLocations(
    query: Payload<typeof getLocations>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.location.locations> = yield call(
        api.location.locations
      );

      yield put(getLocations.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}

export { HomeSaga };
