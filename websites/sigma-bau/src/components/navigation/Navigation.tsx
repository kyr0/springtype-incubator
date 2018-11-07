import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {Router} from "../../../../../src/package/html/src/router/Router";
import template from "./Navigation.tpl";

interface Menu {
    displayName: string;
    routeFunction: Function;
}

export interface NavigationProps {
    menu: Array<Menu>;
}

@WebComponent({
    tag: 'm-navigation',
    template
})
export class Navigation extends HTMLElement implements WebComponentLifecycle {

    open: boolean = false;

    constructor(
        public props: NavigationProps,
        protected router: Router,
    ) {
        super();
        this.props.menu = [];
    }

}