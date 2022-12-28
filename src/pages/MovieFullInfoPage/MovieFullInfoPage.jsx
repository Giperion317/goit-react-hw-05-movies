import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieFullInfo } from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { Wrapper } from './MovieFullInfoPage.styled';

const MovieFullInfoPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieFullInfo(movieId)
      .then(setMovie)
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  const getVideo = () => {
    const videos = movie.videos.results;
    return videos.find(video => video.type === 'Trailer')
      ? videos.find(video => video.type === 'Trailer').key
      : videos[0].key;
  };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && movie && (
        <>
          
            <button
              type="button"
              onClick={() => {
                navigate(location?.state?.from ?? '/');
              }}
            >
              Go back
            </button>
            
          <Wrapper>
            <img
              src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
              alt={movie.original_title}
              width="400"
            />
             <h1>{movie.original_title}</h1>
            <p>User Score: {movie.vote_average}</p>
            <hr />
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <hr />
            <h3>Genres</h3>
            <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            <hr />
            <iframe
              src={`https://www.youtube.com/embed/${getVideo()}`}
              title={movie.original_title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Wrapper>
          <hr />
          <Link to={`cast`} state={location.state}>
            Cast
          </Link>
          <Link to={`reviews`} state={location.state}>
            Revievs
          </Link>
          <hr />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieFullInfoPage;
