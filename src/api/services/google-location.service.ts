import { Location } from '../../api/models/map';
import { HttpService } from './http.service';

const key = 'AIzaSyCk6tf-e-T8ifg_K9_0WsNE1ghOtovN9do';

class GoogleLocationService {
  public constructor(private http: HttpService) {}

  public pickOnMap = ({ lat, lng }) =>
    this.http.request({
      baseURL: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&language=en&key=${key}`,
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' }
    });

  public search = query =>
    this.http.request({
      baseURL: `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&language=en&key=${key}`,
      method: 'GET',
      headers: { 'Content-Type': 'text/plain' }
    });
}

export { GoogleLocationService };
