import { config } from '../config';

interface IAPICongifURI {
  pathname: string;
  protocol: string;
  host: string;
  query?: object;
}

export interface IEndPoint {
  method: string;
  uri: {
    pathname: string;
    query?: object;
  };
}

export const getUrlWithParamsConfig = (endPointConfig: string, params: any) => {
  // const {method, uri} = (config.client.endpoint as any)[endPointConfig]
  const { method, uri }: IEndPoint = config.client.endpoint[endPointConfig as keyof typeof config.client.endpoint];

  let body = {};

  const apiConfUri: IAPICongifURI = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query,
    },
  };

  const query = { ...params };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.includes(`{${val}}`)) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result;
    }

    return acc;
  }, apiConfUri.pathname);

  apiConfUri.pathname = pathname;

  if (method === 'GET') {
    apiConfUri.query = {
      ...apiConfUri.query,
      ...query,
    };
  } else {
    body = {
      ...query,
    };
  }

  return {
    method,
    uri: { ...apiConfUri },
    body,
  };
};
