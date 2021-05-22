import { Location, Comment, User } from '@api';

class HomeState {
  showSidebar: boolean = true;

  locations: Location[] = [];

  searchQuery: string = '';

  openLocation: Location = null;

  locationComments: Comment[] = [];

  user: User = null;
}

export { HomeState };
