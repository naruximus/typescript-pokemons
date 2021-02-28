import React from 'react';
import { useRoutes, usePath } from 'hookrouter';

import { routes } from './routes';
import { NotFoundPage } from './pages';
import { Header, Footer } from './components';

export const App = () => {
  const match = useRoutes(routes);
  const path = usePath();

  return match ? (
    <>
      <Header />
      {match}
      <Footer yellowStyle={path === '/'} />
    </>
  ) : (
    <NotFoundPage />
  );
};
