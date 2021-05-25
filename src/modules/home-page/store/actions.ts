import { Location, Comment, User, Entry } from '@api';
import { make } from 'redux-chill';

const changeSidebar = make('[home] change sidebar').stage(
  (isShow: boolean) => isShow
);

const deleteComment = make('[comments] delete').stage((id: number) => id);

const getLocations = make('[home] get locations')
  .stage((query?: string) => query)
  .stage('success', (locations: Location[]) => locations);

const setSearchQuery = make('[home] set search query').stage(
  (query?: string) => query
);

const setFilmSearchQuery = make('[home] set film search query').stage(
  (query?: string) => query
);

const getCommentsForLocation = make('[home] get location comments')
  .stage((locationId?: number) => locationId)
  .stage('success', (comments: Comment[]) => comments);

const addComment = make('[home] add comment')
  .stage(
    ({
      location,
      user,
      text
    }: {
      location: Location;
      user: User;
      text: string;
    }) => ({ location, user, text })
  )
  .stage('success', (comment: Comment) => comment);

const setOpenedLocation = make('[home] set opened location').stage(
  (location?: Location) => location
);

const getCountries = make('[location] get countries')
  .stage(() => {})
  .stage('success', (countries: Entry[]) => countries);

const setMapCenter = make('[location] set map center').stage(
  (coordinates: { lat: number; lng: number }) => coordinates
);

const login = make('[user] login')
  .stage((email: string, password: string) => ({ email, password }))
  .stage('success', (user: User) => user);

const registration = make('[user] register')
  .stage(({ email, password, name }) => ({
    email,
    password,
    name
  }))
  .stage('success', (user: User) => user);

export {
  changeSidebar,
  getLocations,
  setSearchQuery,
  setOpenedLocation,
  getCommentsForLocation,
  addComment,
  login,
  getCountries,
  deleteComment,
  setMapCenter,
  setFilmSearchQuery,
  registration
};
