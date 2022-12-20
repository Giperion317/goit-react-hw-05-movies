import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieFullInfo } from 'components/services/moviesApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const isFirstRender = useRef(true);
  const { movieId } = useParams();
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchMovieFullInfo(movieId).then(setMovie);
  }, [movieId]);
  return movie;
};
