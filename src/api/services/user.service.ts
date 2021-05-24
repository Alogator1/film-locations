import { User } from '../../api/models/map';
import { HttpService } from './http.service';

class UserService {
  public constructor(private http: HttpService) {}

  public login = ({ email, password }: { email: string; password: string }) =>
    this.http.request<User>({
      url: `/users/login`,
      method: 'POST',
      data: {
        email,
        password
      }
    });
}

export { UserService };
