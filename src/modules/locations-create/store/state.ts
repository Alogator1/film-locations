import { City, Entry, Film, GoogleResponse } from '@api';

class CreateLocationState {
  pickedLocation: GoogleResponse = null;

  pickedFormattedAddress: string = '';

  locationOptions: any[] = [];

  city: City = null;

  country: Entry = null;

  films: Film[] = [];
}

export { CreateLocationState };
