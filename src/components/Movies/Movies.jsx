import { useLocation } from 'react-router-dom';
import {
  MoviesItem,
  MoviesList,
  MoviesLink,
  Wrapper,
  MoviesTitle,
} from './Modies.styled';
import PropTypes from 'prop-types';

export const Movies = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesList>
      {movies &&
        movies.map(({ original_title, id, poster_path }) => (
          <MoviesItem key={id}>
            <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={'https://image.tmdb.org/t/p/original' + poster_path}
                alt={original_title}
                width="270"
              />
              <Wrapper>
                <MoviesTitle>{original_title}</MoviesTitle>
              </Wrapper>
            </MoviesLink>
          </MoviesItem>
        ))}
    </MoviesList>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};
