import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/moviesApi';
import { Movies } from 'components/Movies/Movies';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies().then(setMovies).catch(error => {
        console.log(error.message);
      });
  }, []);
  return (
    <section>
      <h1>Trending today</h1>
      {movies && <Movies movies={movies} />}
    </section>
  );
};
