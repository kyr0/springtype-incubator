export interface IMovieRootState {
    movieModel: MovieState;
}

export interface MovieState {
    movies: MovieDto[]
}

export interface MovieDto {
    id: number,
    filename: string,
    title: string,
    posterSmall?: string,
    poster?: string,
    backdrop?: string,
    adult: boolean,
    size: string,
    overview: string,
    releaseDate: string,
    genres: string[]
}