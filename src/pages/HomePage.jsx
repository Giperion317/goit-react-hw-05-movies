import { useState, useEffect} from "react"
import { fetchMovies } from "components/services/moviesApi"
import { Movies } from "components/Movies/Movies";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies().then(setMovies)
    },[])
    return (
        movies && (
            <section>
                <h1>Trending today</h1>
                <Movies movies={movies} />
        </section>
    )
        )
        
}