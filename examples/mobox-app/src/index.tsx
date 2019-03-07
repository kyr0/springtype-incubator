import {WebApp} from "../../../src/package/html/src/decorator/WebApp";

import {Movie} from "./components/movie/Movie";

@WebApp({
    routes: {
        ['']: <mb-movie/>
    },
    components: {
        Movie
    },
    models: {}
})
export class Index {
}