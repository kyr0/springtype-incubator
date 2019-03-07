import {WebComponentLifecycle, WebComponent} from "../../../../../src/package/html";
import template from "./Movie.tpl";
import {MovieService} from "../../service/MovieService";
import {MovieDto} from "../../state/MovieState";
interface PropsMovies {
    movies: MovieDto[];
}
@WebComponent({
    tag: 'mb-movie',
    template
})
export class Movie extends HTMLElement implements WebComponentLifecycle {

    constructor(
        public props: PropsMovies,
        public movieService: MovieService){
        super()
    }

    async init() {

         const movies = await this.movieService.getAll();
         this.props.movies = movies!;
    }
}