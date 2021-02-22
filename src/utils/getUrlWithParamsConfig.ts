import { config } from '../config';

export const getUrlWithParamsConfig = (endPointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endPointConfig].uri,
    query,
  };

  return url;
};
