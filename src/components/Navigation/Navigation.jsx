import { NavigationLink } from "./Navigation.styled";
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavigationLink to={'/'} end>Home</NavigationLink>
        </li>
        <li>
          <NavigationLink to={'/movies'}>Movies</NavigationLink>
        </li>
      </ul>
    </nav>
  );
};
