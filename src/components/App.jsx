import { GlobalStyle } from "utils/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";
import { MovieFullInfoPage } from "pages/MovieFullInfoPage";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { NotFoundPage } from "pages/NotFoundPage";

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
          
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
    </Routes>
      <GlobalStyle />
      </>
  );
};
