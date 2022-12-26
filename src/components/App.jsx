import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "utils/GlobalStyles";
import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('pages/HomePage'))
const MoviesPage = lazy(() => import('pages/MoviesPage'))
const MovieFullInfoPage = lazy(() => import('pages/MovieFullInfoPage'))
const Cast = lazy(() => import('pages/Cast/Cast'))
const Reviews = lazy(() => import('pages/Reviews/Reviews'))

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='movies' element={<MoviesPage />} />
          <Route path='movies/:movieId' element={<MovieFullInfoPage />}>
            <Route path='cast' element={<Cast/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
            <Route path="*" element={<HomePage />} />
        </Route>
        </Routes>
      <GlobalStyle />
      </>
  );
};
