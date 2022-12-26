import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from "services/moviesApi";
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (!cast.length) return;
        setCast(cast);
      })
      .catch(error => {
        console.log(error.message);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && cast.length === 0 ? (
        <p>We don't have cast for this movie.</p>
      ) : (
         <ul>
      {cast.map(({character, name, profile_path, id}) => (
            <li key={id}>
                <img src={'https://image.tmdb.org/t/p/original' + profile_path} alt={name} width='60' />
                <b>{name}</b>
                <p>Character: {character}</p>
            </li>
        ))}
    </ul>
      )}
    </>
       
    )
}

export default Cast;