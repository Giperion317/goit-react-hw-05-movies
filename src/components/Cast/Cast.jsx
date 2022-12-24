import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from "services/moviesApi"

export const Cast = () => {
      const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        if (!cast.length) return;
        setCast(cast);
      })
      // .then(setCredits)
      .catch(error => {
        console.log(error.message);
      });
  }, [movieId]);
  return (
               <>
      {cast ? (
         <ul>
      {cast.map(({character, name, profile_path, id}) => (
            <li key={id}>
                <img src={'https://image.tmdb.org/t/p/original' + profile_path} alt={name} width='60' />
                <b>{name}</b>
                <p>Character: {character}</p>
            </li>
        ))}
    </ul>
      ) : (
        <p>We don't have cast for this movie.</p>
      )}
    </>
       
    )
}