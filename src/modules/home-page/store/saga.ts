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
      const locations: Location[] = [];

      locations.push({
        id: 1,
        name: 'location',
        film: {
          id: 1,
          actors: 'Some actors',
          name: 'Film',
          director: 'Director',
          genre: {
            id: 1,
            name: 'Action'
          }
        },
        latitude: 30,
        longitude: 14,
        city: {
          id: 1,
          name: 'Kiva',
          country: {
            id: 1,
            name: 'Ukraine'
          }
        },
        description: 'Some text',
        user: {
          id: 1,
          name: 'Kiva',
          photo: 'some photo',
          role: {
            id: 1,
            name: 'admin'
          },
          email: 'admin@email.com'
        }
      });

      // const response: Called<typeof api.location.locations> = yield call(
      //   api.location.locations,
      //   query
      // );

      yield put(getLocations.success(locations));
    } catch (error) {
      console.log(error);
    }
  }
}

export { HomeSaga };
