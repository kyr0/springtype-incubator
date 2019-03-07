import {Movie} from "./Movie";

export default (component: Movie) => {
    return (component.props.movies ||[]).map(movie =>
        <div class="container">
            {
                <div>
                    <h2>{movie.title}</h2>
                    <img src={movie.posterSmall}/>
                </div>
            }
        </div>
    )
}