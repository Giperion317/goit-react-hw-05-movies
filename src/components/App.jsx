import { GlobalStyle } from "utils/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";

export const App = () => {
  return (
    <>
    <Routes>
        <Route path='/goit-react-hw-05-movies/' element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='/goit-react-hw-05-movies/movies' element={<MoviesPage/>} />
      </Route>
    </Routes>
      <GlobalStyle />
      </>
  );
};
