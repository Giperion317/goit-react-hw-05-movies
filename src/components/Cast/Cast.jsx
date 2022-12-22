import { fetchMovieCast } from "services/moviesApi"
import { useFetchMovie } from "hooks/useFetchMovie"

export const Cast = () => {
    const credits = useFetchMovie(fetchMovieCast);
            return (
        <ul>
      {credits &&
        credits.cast.map(({character, name, profile_path, id}) => (
            <li key={id}>
                <img src={'https://image.tmdb.org/t/p/original' + profile_path} alt={name} width='60' />
                <b>{name}</b>
                <p>Character: {character}</p>
            </li>
        ))}
    </ul>
    )
}