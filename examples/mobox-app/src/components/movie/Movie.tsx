import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import template from "./Movie.tpl";
import {MovieService} from "../../service/MovieService";
import {PageDtoMovieDto} from "api/src";

interface PropsMovies {
    response: PageDtoMovieDto;
    pageSize: number;
    page: number;
}

@WebComponent({
    tag: 'mb-movie',
    template
})
export class Movie extends HTMLElement implements WebComponentLifecycle {


    constructor(
        public props: PropsMovies,
        public movieService: MovieService) {
        super()
    }

    async init() {
        this.props.pageSize = 100;
        this.props.page = 0;
        await this.onPageLoad();
    }

    async onPageLoad() {
        const response = await this.movieService.getPage(this.props.page, this.props.pageSize);
        if (response) {
            this.props.response = response;
        }
    }
}