import React from 'react';
import { useRoutes } from 'hookrouter';

import { routes } from './routes';
import { NotFoundPage } from './pages';
import { Header } from './components';

export const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};
