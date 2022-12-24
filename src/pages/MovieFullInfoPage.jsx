import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieFullInfo } from 'services/moviesApi';

export const MovieFullInfoPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    fetchMovieFullInfo(movieId)
      .then(setMovie)
      .catch(error => {
        console.log(error.message);
      });
  }, [movieId]);

  const getVideo = () => {
    const videosArr = movie.videos.results;
    return videosArr.find(video => video.type === 'Trailer')
      ? videosArr.find(video => video.type === 'Trailer').key
      : videosArr[0].key;
  };
  console.log(movie)
  return (
    movie && (
      <>
        <button
          type="button"
          onClick={() => {
            navigate(location?.state?.from ?? '/');
          }}
        >
          Go back
        </button>
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
        <iframe src={`https://www.youtube.com/embed/${getVideo()}`}
          title={movie.original_title}
                frameBorder="0"
                allowFullScreen></iframe>
        <hr />
        <Link to={`cast`} state={location.state}>
          Cast
        </Link>
        <Link to={`reviews`} state={location.state}>
          Revievs
        </Link>
        <hr />
        <Outlet />
      </>
    )
  );
};
