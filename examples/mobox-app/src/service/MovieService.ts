import {Component} from "../../../../src/package/di";
import {MovieResourcesApi, PageDtoMovieDto} from "api/src";

@Component
export class MovieService {

    constructor() {
    }

    public async getPage(page: number, pageSize: number): Promise<PageDtoMovieDto | undefined> {
        try {
            return new MovieResourcesApi().listMoviesUsingGET(
                undefined,
                page,
                pageSize
            );
        } catch (e) {
            console.error('error', e)
        }
    }
}