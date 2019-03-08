import {WebApp} from "../../../src/package/html/src/decorator/WebApp";
import {Movie} from "./components/movie/Movie";
import {Navigation} from "./components/nav/Navigation";

@WebApp({
    routes: {
        ['']: [<mb-nav/>,<mb-movie/>]
    },
    components: {
        Movie,
        Navigation
    },
    models: {}
})
export class Index {
}