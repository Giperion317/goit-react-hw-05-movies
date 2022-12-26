import { Suspense } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <header>{<Navigation />}</header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>Footer</footer>
    </>
  );
};
