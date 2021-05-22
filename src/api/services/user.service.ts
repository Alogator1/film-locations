import { User } from '../../api/models/map';
import { HttpService } from './http.service';

class UserService {
  public constructor(private http: HttpService) {}

  public getById = (id: number) =>
    this.http.request<User>({
      url: `/users/${id}`,
      method: 'GET'
    });
}

export { UserService };
