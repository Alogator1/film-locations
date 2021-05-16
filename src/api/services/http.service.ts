import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import merge from 'deepmerge';
import { stringify } from 'querystring';

class HttpService {
  /**
   * Get params
   */
  public constructor(
    private getConfig: () => AxiosRequestConfig,
    private statusMap: {
      [x: number]: (response: AxiosResponse) => any;
    }
  ) {}

  /**
   * Do api request
   */
  public request = async <T = any>(
    config: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    const defaults = this.getConfig();
    let response: AxiosResponse;
    let failure = false;
    const { data = {}, url } = config;

    try {
      const configuration = merge(defaults, {
        ...config,
        url:
          !config.method || config.method == 'GET'
            ? Object.keys(data).length > 0
              ? `${url}?${stringify(data)}`
              : url
            : url,
        data
      });

      if (data instanceof FormData) {
        configuration.data = data;
      }

      response = await axios(configuration);
    } catch (error) {
      response = error.response;

      failure = true;
    }

    for (const status in this.statusMap) {
      if (response.status != Number(status)) continue;

      const handler = this.statusMap[status];
      const next = handler(response);

      if (next) break;

      return;
    }

    if (failure) {
      throw response;
    }

    return response as AxiosResponse<T>;
  };
}

export { HttpService };
