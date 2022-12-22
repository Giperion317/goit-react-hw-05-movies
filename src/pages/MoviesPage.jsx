import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/moviesApi';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Movies } from 'components/Movies/Movies';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('moviename');

  useEffect(() => {
    fetchMoviesSearch(query).then(setMovies);
  }, [query]);

  const serchQuery = serchQuery => {
    // if (serchQuery !== query) {
    //   setQuery(serchQuery);
    //   setPage(1);
    //   setImages([]);
    // }
    setSearchParams({ moviename: serchQuery });
  };
  return (
    <section>
      <h1>Movies</h1>
      <SearchForm onSubmit={serchQuery} />
      <Movies movies={movies} />
    </section>
  );
};
