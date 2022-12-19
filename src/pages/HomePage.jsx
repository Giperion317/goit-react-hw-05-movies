import { useState, useEffect, useRef } from "react"
import { fetchMovies } from "components/services/moviesApi"
import { Movies } from "components/Movies/Movies";

export const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
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