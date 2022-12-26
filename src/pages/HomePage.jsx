import { useState, useEffect } from 'react';
import { fetchMovies } from 'services/moviesApi';
import { Movies } from 'components/Movies/Movies';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies()
      .then(setMovies)
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <section>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {!isLoading && movies.length && <Movies movies={movies} />}
    </section>
  );
};

export default HomePage;
