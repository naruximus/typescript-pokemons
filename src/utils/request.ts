import Url from 'url';
import { getUrlWithParamsConfig } from './getUrlWithParamsConfig';

export const req = async <T>(endpoint: string, query: object): Promise<T> => {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return await fetch(uri).then((res) => res.json());
};
