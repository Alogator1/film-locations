import { Location } from '@api';

class HomeState {
  showSidebar: boolean = true;

  locations: Location[] = [];

  searchQuery: string = '';

  openLocation: Location = null;
}

export { HomeState };
