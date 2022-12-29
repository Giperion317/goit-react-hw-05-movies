import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/moviesApi';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Movies } from 'components/Movies/Movies';
import { Loader } from 'components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    fetchMoviesSearch(query).then((data) => {
      if (!data.length) {
          alert('Something went wrong, try again!');
        }
      setMovies(data)
    }).catch(error => {
        console.log(error.message);
    })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams, query]);

  const serchQuery = serchQuery => {
    setSearchParams({ query: serchQuery });
  };
  return (
    <>
      <SearchForm onSubmit={serchQuery} />
      {isLoading && <Loader />}
      {!isLoading && movies && <Movies movies={movies} />}
    </>
  );
};

export default MoviesPage;