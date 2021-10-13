// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

// Route
import { useParams } from "react-router-dom";

// Components
import Spinner from './Spinner';
import BreadCrum from "./BreadCrum";
import MovieInfo from './MovieInfo';
import MovieInfoBar from "./MovieInfoBar";
import Grid from './Grid';
import Actor from "./Actor";

// Images
import NoImage from '../images/no_image.jpg'


// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

const Movie = () => {
    const {movieID} = useParams();
    const {state: movie, loading, error} = useMovieFetch(movieID);

    console.log(movie)

    if(loading) return <Spinner />
    if(error) return <div>There has been an error</div>

    return (
        <>
            <BreadCrum title={movie.title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
            <Grid header='Actors' >
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id} 
                        character={actor.character} 
                        name={actor.name} 
                        imageUrl={
                        actor.profile_path 
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        : NoImage
                    }/>
                ))}
            </Grid>
        </>
    )
}

export default Movie