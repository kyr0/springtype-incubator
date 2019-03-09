import {Movie} from "./Movie";
import {MovieDto} from "api/src";

export default (component: Movie) => {
    let movies: Array<MovieDto> = [];
    if (component.props.response) {
        movies = component.props.response.content;
    }
    return [<div class="container">
        <div class="row width">
            <div class="col s12 m6 l3 rowWidth">
            </div>
        </div>
        <div class="row">
            <div class="col s12">
                <h3 class="header">Mobox-App</h3>
            </div>
            {movies.map(movie =>
                <div class="col s12 m6 l3" style={`height: ${component.props.height}px`}>
                    <div class="wrapper waves-effect waves-light btn modal-trigger"
                         data-target={'modal-movie-' + movie.id}>
                        <img class="movie-img "
                             src={movie.poster}/>
                        <div class="info">
                            <div>{movie.title}</div>
                            <div>{movie.releaseDate}</div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    </div>,
        movies.map(movie => <div id={'modal-movie-' + movie.id} class="modal">
            <div class="modal-content">
                <h4>{movie.title}</h4>
                <p>{movie.overview}</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>)
    ]
}