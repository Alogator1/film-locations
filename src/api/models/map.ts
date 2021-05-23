import { FieldMetaProps } from 'formik';

class Entry {
  public id: number;
  public name: string;
}

class City {
  public id: number;
  public name: string;
  public country: Entry;
}

class User {
  public id: number;
  public name: string;
  public photo: string;
  public role: Entry;
  public email: string;
  public password: string;
}

class Film {
  public id: number;
  public name: string;
  public director: string;
  public actors: string;
  public genre: Entry;
  public description: string;
}

class Location {
  public id?: number;
  public name: string;
  public latitude: number;
  public longitude: number;
  public city: City;
  public film: Film;
  public description: string;
  public user: User;
}

class Comment {
  public id?: number;
  public user: User;
  public text: string;
  public location: Location;
  public date: Date;
}

class GoogleResponse {
  public lat: number;
  public lng: number;
  public formattedAddress: string;
  public country: Entry;
  public city?: City;
}

export { Entry, City, User, Film, Location, Comment, GoogleResponse };
