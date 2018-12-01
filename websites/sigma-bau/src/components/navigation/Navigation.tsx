import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {Router} from "../../../../../src/package/html/src/router/Router";
import template from "./Navigation.tpl";

export interface Menu {
    displayName: string;
    routeFunction: Function;
}

export interface NavigationProps {
    menus: Array<Menu>;
}

@WebComponent({
    tag: 'sb-navigation',
    template
})
export class Navigation extends HTMLElement implements WebComponentLifecycle {

    open: boolean = false;

    constructor(
        public props: NavigationProps,
        public router: Router,
    ) {
        super();
        this.props.menus = [];
    }

    init = () => {

    }

}