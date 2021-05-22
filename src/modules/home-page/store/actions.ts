import { Location, Comment, User } from '@api';
import { make } from 'redux-chill';

const changeSidebar = make('[home] change sidebar').stage(
  (isShow: boolean) => isShow
);

const getLocations = make('[home] get locations')
  .stage((query?: string) => query)
  .stage('success', (locations: Location[]) => locations);

const setSearchQuery = make('[home] set search query').stage(
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

const getUserById = make('[user] get user by id')
  .stage((id?: number) => id)
  .stage('success', (user: User) => user);

export {
  changeSidebar,
  getLocations,
  setSearchQuery,
  setOpenedLocation,
  getCommentsForLocation,
  addComment,
  getUserById
};
