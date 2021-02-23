import { config } from '../config';

export const getUrlWithParamsConfig = (endPointConfig: string, query: any) => {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endPointConfig].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.includes(`{${val}}`)) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }

    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };

  return url;
};
