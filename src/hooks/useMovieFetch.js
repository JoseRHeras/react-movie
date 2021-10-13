import { useState, useEffect} from "react";

// API
import API from '../API'

//Helpers
import {isPersistedState} from '../helpers'

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    


    useEffect(() => {
        setError(false)

        const fetchMovies = async () => {
            try {
                setError(false);
                setLoading(true);
                
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter( member => member.job === 'Director')

                console.log(movie)
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);
            } catch(e) {
                setError(true);
            }
        }

               
        // Check session storage for saved data
        const sessionState = isPersistedState(movieId)
        if(sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        // Call function
        fetchMovies()
    }, [movieId])

    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state))
    }, [movieId, state])


    return {state, error, loading}
}   