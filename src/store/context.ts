import { enviroment } from '@env';
import { AxiosRequestConfig } from 'axios';
import { History } from 'history';
import { Store } from 'redux';
import { HttpService, LocationService } from 'src/api/services';
import { CommentService } from 'src/api/services/comment.service';
import { UserService } from 'src/api/services/user.service';

/**
 * Get context
 */
const getContext = (history: History, store: Store) => {
  const getConfig = (): Partial<AxiosRequestConfig> => ({
    baseURL: 'http://0c9f7e0b6c3c.ngrok.io'
  });

  const onUnauthorized = () => true;

  const http = new HttpService(getConfig, {
    401: onUnauthorized
  });

  const api = {
    location: new LocationService(http),
    comment: new CommentService(http),
    user: new UserService(http)
  };

  return {
    store,
    history,
    api
  };
};

/**
 * Saga context
 */
type StoreContext = ReturnType<typeof getContext>;

export { StoreContext, getContext };
