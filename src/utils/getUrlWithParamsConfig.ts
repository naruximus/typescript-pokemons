import Url from 'url';
import { config } from '../config';

export const getUrlWithParamsConfig = (endPointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endPointConfig].uri,
    query,
  };

  return url;
};
