import { Location, Comment, User, Entry } from '@api';

class HomeState {
  showSidebar: boolean = true;

  locations: Location[] = [];

  searchQuery: string = '';

  openLocation: Location = null;

  locationComments: Comment[] = [];

  user: User = null;

  countries: Entry[] = [];
}

export { HomeState };
