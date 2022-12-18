import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={'/goit-react-hw-05-movies'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/goit-react-hw-05-movies/movies'}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};
