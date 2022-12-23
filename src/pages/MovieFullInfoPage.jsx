import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { fetchMovieFullInfo } from 'services/moviesApi';

export const MovieFullInfoPage = () => {
    const movie = useFetchMovie(fetchMovieFullInfo);
    const navigate = useNavigate()
    const location = useLocation()
  return (
    movie && (
      <>
        <button type="button" onClick={()=>{navigate(location?.state?.from ?? '/')}}>Go back</button>
        <img
          src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
          alt={movie.original_title}
          width="300"
        />
        <h1>{movie.original_title}</h1>
        <p>User Score: {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        <hr />
        <Link to={`cast`} state={location.state}>Cast</Link>
        <Link to={`reviews`} state={location.state}>Revievs</Link>
        <hr />
        <Outlet />
      </>
    )
  );
};
