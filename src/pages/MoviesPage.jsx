import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/moviesApi';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Movies } from 'components/Movies/Movies';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    fetchMoviesSearch(query).then((data) => {
      if (!data.length) {
          alert('Something went wrong, try again!');
        }
      setMovies(data)
    }).catch(error => {
        console.log(error.message);
      })
  }, [query]);

  const serchQuery = serchQuery => {
    setSearchParams({ query: serchQuery });
  };
  return (
    <section>
      <SearchForm onSubmit={serchQuery} />
      {movies && <Movies movies={movies} />}
    </section>
  );
};
