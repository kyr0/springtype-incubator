import {Movie} from "./Movie";
import {MovieDto} from "api/src";

export default (component: Movie) => {
    let movies: Array<MovieDto> = [];
    if (component.props.response) {
        movies = component.props.response.content;
    }
    return <div class="container">

        <div class="row">
            <div class="col lg12">
                <h3 class="header">Mobox-App</h3>
            </div>
            {movies.map(movie =>
                <div class="col lg4">
                    <img class="movie-img" src={movie.posterSmall}/>
                </div>)}
        </div>
    </div>
}