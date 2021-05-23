import { reducer } from 'redux-chill';
import {
  getFilms,
  pickLocation,
  searchLocation,
  selectCity,
  selectCountry
} from './actions';
import { CreateLocationState } from './state';

const createLocation = reducer(new CreateLocationState())
  .on(pickLocation.success, (state, address) => {
    state.pickedLocation = { ...address };
    state.pickedFormattedAddress = address?.formattedAddress;
  })
  .on(searchLocation.success, (state, addresses) => {
    state.locationOptions = addresses;
  })
  .on(selectCity, (state, city) => {
    state.city = city;
  })
  .on(getFilms.success, (state, films) => {
    state.films = films;
  })
  .on(selectCountry, (state, country) => {
    state.country = country;
  });

export { createLocation };
