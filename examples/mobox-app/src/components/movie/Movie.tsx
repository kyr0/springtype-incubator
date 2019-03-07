import {WebComponentLifecycle, WebComponent} from "../../../../../src/package/html";
import template from "./Movie.tpl";

@WebComponent({
    tag: 'mb-movie',
    template
})
export class Movie extends HTMLElement implements WebComponentLifecycle {
    constructor(){super()}
}