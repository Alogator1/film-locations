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

  // public telco = (query: string, limit?: number) =>
  //   this.http.request<Response<Entry[]>>({
  //     url: '/dictionary/telco',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });

  // public region = (query: string, limit?: number) =>
  //   this.http.request<Response<Entry[]>>({
  //     url: '/dictionary/region',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });

  // public country = (data: { query?: string; limit?: number } = {}) =>
  //   this.http.request<Response<PaginatedData<Entry>>>({
  //     url: '/countries',
  //     data
  //   });

  // public beneficiary = (query: string, limit?: number) =>
  //   this.http.request<Response<Entry[]>>({
  //     url: '/dictionary/beneficiary',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });

  // public user = (query: string, limit?: number) =>
  //   this.http.request<Response<User[]>>({
  //     url: '/dictionary/user',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });

  // public survey = (query: string, limit?: number) =>
  //   this.http.request<Response<Survey[]>>({
  //     url: '/dictionary/survey',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });

  // public company = (query: string, limit?: number) =>
  //   this.http.request<Response<Survey[]>>({
  //     url: '/dictionary/company',
  //     data: {
  //       query,
  //       limit
  //     }
  //   });
}

export { LocationService };
