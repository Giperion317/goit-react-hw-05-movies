import { Link } from "react-router-dom";
export const Movies = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({original_title, id}) => (
            <li key={id}>
               <Link>{original_title}</Link>
            </li>
        ))}
    </ul>
  );
};
