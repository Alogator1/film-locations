import { GoogleResponse } from '@api';
import { Called } from '@core';
import { State } from '@store';
import { StoreContext } from '@store/context';
import { navigate } from '@store/router';
import { Payload, Saga } from 'redux-chill';
import { call, put, select } from 'redux-saga/effects';
import {
  addLocation,
  getFilms,
  pickLocation,
  searchLocation,
  selectCity,
  selectCountry,
  selectLocation
} from './actions';

class CreateLocationSaga {
  @Saga(pickLocation)
  public *pickLocation(
    { lat, lng }: Payload<typeof pickLocation>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.googleLocation.pickOnMap> = yield call(
        api.googleLocation.pickOnMap,
        { lat, lng }
      );

      let city = response?.data?.results[0].address_components?.find(
        component => component?.types?.includes('locality')
      );

      if (!city) {
        city = response?.data?.results[0].address_components?.find(component =>
          component?.types?.includes('administrative_area_level_1')
        );
      }

      if (!city) {
        city = response?.data?.results[0].address_components?.find(component =>
          component?.types?.includes('administrative_area_level_2')
        );
      }

      const {
        home: { countries }
      }: State = yield select();

      let findCountry = response?.data?.results[0].address_components?.find(
        component => component?.types?.includes('country')
      );

      const country = countries?.find(
        country => country?.name == findCountry?.long_name
      );

      const createdCity: Called<typeof api.location.createCity> = yield call(
        api.location.createCity,
        country.id,
        city?.long_name
      );

      yield put(
        selectCity({
          id: createdCity?.data?.id,
          name: createdCity?.data?.name,
          country: country
        })
      );

      yield put(selectCountry(country));

      yield put(
        pickLocation.success({
          lat: lat,
          lng: lng,
          formattedAddress: response?.data?.results[0].formatted_address,
          city: {
            id: createdCity?.data?.id,
            name: createdCity?.data?.name,
            country: country
          },
          country: country
        })
      );
    } catch (error) {
      console.log(error);

      alert('Please, specify more accurate location or try again!');
    }
  }

  @Saga(searchLocation)
  public *searchLocation(
    query: Payload<typeof searchLocation>,
    { api }: StoreContext
  ) {
    try {
      const response: Called<typeof api.googleLocation.search> = yield call(
        api.googleLocation.search,
        query
      );

      const {
        home: { countries }
      }: State = yield select();

      const locations: any[] = [];

      response?.data?.results?.map(result => {
        locations?.push({
          lat: result?.geometry?.location?.lat,
          lng: result?.geometry?.location?.lng,
          formattedAddress: result?.formatted_address,
          googleLocation: result
        });
      });

      yield put(searchLocation.success(locations));
    } catch (error) {
      console.log(error);

      alert('Please, specify more accurate location or try again!');
    }
  }

  @Saga(selectLocation)
  public *selectLocation(
    location: Payload<typeof selectLocation>,
    { api }: StoreContext
  ) {
    try {
      console.log(location);

      let city = location?.googleLocation?.address_components?.find(component =>
        component?.types?.includes('locality')
      );

      if (!city) {
        city = location?.googleLocation?.address_components?.find(component =>
          component?.types?.includes('administrative_area_level_1')
        );
      }

      if (!city) {
        city = location?.googleLocation?.address_components?.find(component =>
          component?.types?.includes('administrative_area_level_2')
        );
      }

      console.log(city);

      const {
        home: { countries }
      }: State = yield select();

      let findCountry = location?.googleLocation?.address_components?.find(
        component => component?.types?.includes('country')
      );

      const country = countries?.find(
        country => country?.name == findCountry?.long_name
      );

      const createdCity: Called<typeof api.location.createCity> = yield call(
        api.location.createCity,
        country.id,
        city?.long_name
      );

      yield put(
        selectCity({
          id: createdCity?.data?.id,
          name: createdCity?.data?.name,
          country: country
        })
      );

      yield put(selectCountry(country));

      yield put(
        pickLocation.success({
          lat: location?.lat,
          lng: location?.lng,
          formattedAddress: location?.formattedAddress,
          city: {
            id: createdCity?.data?.id,
            name: createdCity?.data?.name,
            country: country
          },
          country: country
        })
      );
    } catch (error) {
      console.log(error);

      alert('Please, specify more accurate location or try again!');
    }
  }

  @Saga(getFilms)
  public *getFilms(_: Payload<typeof getFilms>, { api }: StoreContext) {
    try {
      const response: Called<typeof api.location.getFilms> = yield call(
        api.location.getFilms
      );

      yield put(getFilms.success(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  @Saga(addLocation)
  public *addLocation(
    location: Payload<typeof addLocation>,
    { api }: StoreContext
  ) {
    try {
      yield call(api.location.createLocation, location);

      yield put(navigate('/'));
    } catch (error) {
      console.log(error);
    }
  }
}

export { CreateLocationSaga };
