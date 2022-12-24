import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) return;
        setReviews(results);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [movieId]);
  return (
    <>
      {reviews ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>Autor: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
