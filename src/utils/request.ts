import Url from 'url';
import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

interface IOptions {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConf {
  method: string;
  uri: Partial<URL>;
  body: object;
}

export const req = async <T>(endpoint: string, params: object): Promise<T> => {
  const { method, uri, body }: IGetUrlWithParamsConf = getUrlWithParamsConfig(endpoint, params);

  const options: IOptions = {
    method,
  };

  if (Object.keys(params).includes('body')) {
    options.body = JSON.stringify(body);
  }

  return await fetch(Url.format(uri), options).then((res) => res.json());
};
