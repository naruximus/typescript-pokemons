import { useRoutes } from 'hookrouter';
import { routes } from './routes';

export const App = () => {
  const match = useRoutes(routes);
  return match;
};
