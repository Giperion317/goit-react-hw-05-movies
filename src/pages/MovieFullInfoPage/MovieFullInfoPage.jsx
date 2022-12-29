import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { Outlet, useNavigate, useLocation} from 'react-router-dom';
import { fetchMovieFullInfo, fetchVideo } from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';
import {
  Wrapper,
  WrapperInfo,
  BackButton,
  MoviesTitle,
  InfoTitle,
  InfoText,
  InfoVideo,
  InfoImg,
  InfoLink,
  InfoLine,
} from './MovieFullInfoPage.styled';
import { IconContext } from 'react-icons';
import { BiChevronsLeft } from 'react-icons/bi';

const MovieFullInfoPage = () => {
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null)
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
    fetchVideo(movieId)
      .then(setVideo)
      .catch(error => {
        console.log(error.message);
      })
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && movie && (
        <>
          <BackButton
            type="button"
            onClick={() => {
              navigate(location?.state?.from ?? '/');
            }}
          >
            <IconContext.Provider value={{ size: 30, color: '#e31e28' }}>
              <BiChevronsLeft />
            </IconContext.Provider>
            Go back
          </BackButton>
          <MoviesTitle>{movie.original_title}</MoviesTitle>
          <Wrapper>
            <InfoImg
              src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
              alt={movie.original_title}
              
            />
            <WrapperInfo>
              <InfoText>User Score: {movie.vote_average * 10}%</InfoText>
              <hr />
              <InfoTitle>Overview</InfoTitle>
              <InfoText>{movie.overview}</InfoText>
              <hr />
              <InfoTitle>Genres</InfoTitle>
              <InfoText>{movie.genres.map(genre => genre.name).join(' ')}</InfoText>
              <hr />
              <InfoTitle>Trailer</InfoTitle>
              {video && <InfoVideo
                src={`https://www.youtube.com/embed/${video[0].key}`}
                title={movie.original_title}
                allowFullScreen
              ></InfoVideo>}
            </WrapperInfo>
          </Wrapper>
          <InfoLine />
          <InfoLink to={`cast`} state={location.state}>
            Cast
          </InfoLink>
          <InfoLink to={`reviews`} state={location.state}>
            Revievs
          </InfoLink>
          <InfoLine/>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieFullInfoPage;
