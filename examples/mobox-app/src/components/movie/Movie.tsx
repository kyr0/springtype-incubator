import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import template from "./Movie.tpl";
import {MovieService} from "../../service/MovieService";
import {PageDtoMovieDto} from "api/src";

interface PropsMovies {
    response: PageDtoMovieDto
    pageSize: number;
    height: number;
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
        if (this.props.response && this.props.response.page == this.props.page) {
            return;
        }
        const response = await this.movieService.getPage(this.props.page, this.props.pageSize);
        if (response) {
            this.props.response = response;
        }
    }

    mountChildren(): void {
        const resize = () => {
            const el: any = this.getElementsByClassName("rowWidth")[0];
            if (el) {
                // normal image 2000 x 3000px
                this.props.height = el.offsetWidth / 2 * 3;
console.error("resize",this.props.height);
            }
        };
        resize();
        window.addEventListener('resize', resize)


        M.Modal.init(this.querySelectorAll('.modal'));
    }
}