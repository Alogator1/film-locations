import { City, Entry, Film, GoogleResponse } from '@api';
import { make } from 'redux-chill';

const pickLocation = make('[location] pick google location')
  .stage((lat?: number, lng?: number) => ({ lat: lat, lng: lng }))
  .stage('success', (address: GoogleResponse) => address);

const searchLocation = make('[location] search google location')
  .stage((query: string) => query)
  .stage('success', (locations: any[]) => locations);

const selectLocation = make('[location] select').stage(
  (location: any) => location
);

const selectCity = make('[location] select city').stage((city: City) => city);

const selectCountry = make('[location] select country').stage(
  (country: Entry) => country
);

const getFilms = make('[films] get all')
  .stage(() => {})
  .stage('success', (films: Film[]) => films);

const addLocation = make('[locations] create location').stage(
  location => location
);

export {
  pickLocation,
  searchLocation,
  selectLocation,
  selectCity,
  selectCountry,
  getFilms,
  addLocation
};
