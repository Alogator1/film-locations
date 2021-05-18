import { Location } from '../../api/models/map';
import { MyResponse } from '../models/common';
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
      url: '/users',
      method: 'post',
      data: location
    });
  };
}

export { LocationService };
