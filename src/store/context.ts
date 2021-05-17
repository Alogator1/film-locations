import { enviroment } from '@env';
import { AxiosRequestConfig } from 'axios';
import { History } from 'history';
import { Store } from 'redux';
import { HttpService, LocationService } from 'src/api/services';

/**
 * Get context
 */
const getContext = (history: History, store: Store) => {
  const getConfig = (): Partial<AxiosRequestConfig> => ({
    baseURL: 'localhost:3000'
  });

  const onUnauthorized = () => true;

  const http = new HttpService(getConfig, {
    401: onUnauthorized
  });

  const api = {
    location: new LocationService(http)
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
