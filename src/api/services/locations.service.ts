import { Location } from '../../api/models/map';
import { MyResponse } from '../models/common';
import { HttpService } from './http.service';

class LocationService {
  public constructor(private http: HttpService) {}

  public locations = (query: string) =>
    this.http.request<MyResponse<Location[]>>({
      url: 'someurl',
      data: {
        query
      },
      method: 'POST'
    });

  public getUsers = () => {
    this.http.request<MyResponse<Location[]>>({
      url: '/users',
      method: 'GET'
    });
  };
}

export { LocationService };
