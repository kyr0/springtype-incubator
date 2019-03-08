import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import template from "./Navigation.tpl";

@WebComponent({
    tag: 'mb-nav',
    template
})
export class Navigation extends HTMLElement implements WebComponentLifecycle {


    constructor() {
        super()
    }

    mountChildren(): void {
        M.Sidenav.init(this.querySelectorAll('.sidenav'));
    }
}