import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchMovie = fetchFunction => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchFunction(movieId).then(setMovie);
  }, [movieId, fetchFunction]);
  return movie;
};
