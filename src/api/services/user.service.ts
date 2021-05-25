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

  public registration = ({
    email,
    password,
    name
  }: {
    email: string;
    password: string;
    name: string;
  }) =>
    this.http.request<User>({
      url: `/users`,
      method: 'POST',
      data: {
        email,
        password,
        name,
        role: 2
      }
    });
}

export { UserService };
