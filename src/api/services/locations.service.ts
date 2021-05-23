import { City, Entry, Film, Location } from '../../api/models/map';
import { HttpService } from './http.service';

class LocationService {
  public constructor(private http: HttpService) {}

  public locations = () =>
    this.http.request<Location[]>({
      url: '/location',
      method: 'GET'
    });

  public locationsByName = (query: string) =>
    this.http.request<Location[]>({
      url: `/location/name/${query}`,
      method: 'GET'
    });

  public locationsById = (id: string) =>
    this.http.request<Location[]>({
      url: `/location/${id}`,
      method: 'GET'
    });

  public locationsByFilm = (film: string) =>
    this.http.request<Location[]>({
      url: `/location/name/${film}`,
      method: 'GET'
    });

  public createLocation = (location: Location) => {
    this.http.request<Location>({
      url: '/location',
      method: 'post',
      data: location
    });
  };

  public createCity = (country: number, name: string) =>
    this.http.request<City>({
      url: '/city',
      method: 'post',
      data: {
        name,
        country
      }
    });

  public getCountries = () =>
    this.http.request<Entry[]>({
      url: '/country',
      method: 'get'
    });

  public getFilms = () =>
    this.http.request<Film[]>({
      url: '/film',
      method: 'get'
    });
}

export { LocationService };
