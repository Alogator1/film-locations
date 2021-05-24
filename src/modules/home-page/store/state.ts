import { Location, Comment, User, Entry } from '@api';

class HomeState {
  showSidebar: boolean = true;

  locations: Location[] = [];

  searchQuery: string = '';

  filmSearchQuery: string = '';

  openLocation: Location = null;

  locationComments: Comment[] = [];

  user: User = null;

  countries: Entry[] = [];

  mapDefaultZoom: {
    lat: number;
    lng: number;
  } = null;
}

export { HomeState };
