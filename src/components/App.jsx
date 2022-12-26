import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from 'utils/GlobalStyles';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieFullInfoPage = lazy(() =>
  import(
    'pages/MovieFullInfoPage' /* webpackChunkName: "movie-full-info-page" */
  )
);
const Cast = lazy(() =>
  import('pages/Cast/Cast' /* webpackChunkName: "cast-subpage" */)
);
const Reviews = lazy(() =>
  import('pages/Reviews/Reviews' /* webpackChunkName: "reviews-subpage" */)
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieFullInfoPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
