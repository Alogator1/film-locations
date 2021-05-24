import { Comment } from '../../api/models/map';
import { HttpService } from './http.service';

class CommentService {
  public constructor(private http: HttpService) {}

  public comments = () =>
    this.http.request<Comment[]>({
      url: '/comment',
      method: 'GET'
    });

  public commentsByLocationId = (locationId: number) =>
    this.http.request<Comment[]>({
      url: `/comment/location/${locationId}`,
      method: 'GET'
    });

  public delteComment = (id: number) =>
    this.http.request<Comment>({
      url: `/comment/${id}`,
      method: 'DELETE'
    });

  public addComment = comment =>
    this.http.request<Comment>({
      url: '/comment',
      method: 'POST',
      data: comment
    });
}

export { CommentService };
