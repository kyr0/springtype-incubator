import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {Router} from "../../../../../src/package/html/src/router/Router";
import template from "./Footer.tpl";

export interface FooterProps {
    name: string
}

@WebComponent({
    tag: 'sb-footer',
    template
})
export class Footer extends HTMLElement implements WebComponentLifecycle {


    constructor(
        public props: FooterProps,
        public router: Router,
    ) {
        super();
    }

    init = () => {
    };


}