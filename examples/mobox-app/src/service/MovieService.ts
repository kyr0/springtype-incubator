import {Component} from "../../../../src/package/di";
import {MovieDto} from "../state/MovieState";

interface MovieResponse {
    page: number;
    totalResults: number;
    totalPages: number;
    content: Array<MovieDto>;
}

@Component
export class MovieService {

    constructor() {
    }

    async getPage(page: number) {

        try {
            const response: Response = await fetch(`/api/v1/movie?page=${page}`);
            const movieResponse = <MovieResponse> await response.json();

            console.log(movieResponse.content);
            return movieResponse.content;

        } catch (e) {

            console.error('error', e)
        }
    }
}