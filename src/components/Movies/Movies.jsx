import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const Movies = ({ movies }) => {
  const location = useLocation()
  return (
    <ul>
      {movies &&
        movies.map(({original_title, id}) => (
            <li key={id}>
               <Link to={`/movies/${id}`} state={{from:location}}>{original_title}</Link>
            </li>
        ))}
    </ul>
  );
};

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
};