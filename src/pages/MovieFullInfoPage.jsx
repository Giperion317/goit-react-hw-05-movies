import { Link, Outlet } from "react-router-dom";
import { useFetchMovie } from "hooks/useFetchMovie"
import { fetchMovieFullInfo } from 'services/moviesApi';

export const MovieFullInfoPage = () => {
    const movie = useFetchMovie(fetchMovieFullInfo)
      return (
          movie && <>
              <img src={'https://image.tmdb.org/t/p/original' + movie.poster_path} alt={movie.original_title} width='300'/>
              <h1>{movie.original_title}</h1>
              <p>User Score: {movie.vote_average}</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
              <hr />
              <Link to={`cast`}>Cast</Link>
              <Link to={`reviews`}>Revievs</Link>
              <hr />
              <Outlet/>
        </>
    )
}