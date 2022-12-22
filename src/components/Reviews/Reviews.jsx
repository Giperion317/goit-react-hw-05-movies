import { fetchMovieReviews } from "services/moviesApi"
import { useFetchMovie } from "hooks/useFetchMovie"

export const Reviews = () => {
    const reviews = useFetchMovie(fetchMovieReviews);
    return (
          <ul>
      {reviews &&
        reviews.results.map(({author, content, id}) => (
            <li key={id}>
                <b>Autor: {author}</b>
                <p>{content}</p>
            </li>
        ))}
    </ul>
    )
}