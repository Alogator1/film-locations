import { FieldMetaProps } from 'formik';

type Entry = {
  id: number;
  name: string;
};

type Country = Entry;

type Genre = Entry;

type Role = Entry;

type City = {
  id: number;
  name: string;
  country: Country;
};

type User = {
  id: number;
  name: string;
  photo: string;
  role: Role;
  email: string;
};

type Film = {
  id: number;
  name: string;
  director: string;
  actors: string;
  genre: Genre;
};

type Location = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  city: City;
  film: Film;
  description: string;
  user: User;
};

type Comment = {
  id: number;
  creator: User;
  text: string;
  location: Location;
  date: Date;
};

export type { Entry, Country, Genre, Role, City, User, Film, Location, Comment };
