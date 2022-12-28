import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { NoneText, AutorName, ReviewsText } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        if (!results.length) return;
        setReviews(results);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && reviews.length === 0 ? (
        <NoneText>We don't have any reviews for this movie!</NoneText>
      ) : (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <AutorName>Autor: {author}</AutorName>
              <ReviewsText>{content}</ReviewsText>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
