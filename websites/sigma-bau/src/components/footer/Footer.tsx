import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import {Router} from "../../../../../src/package/html/src/router/Router";
import template from "./Footer.tpl";

export interface FooterProps {
    name: string,
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

    mountChildren = () => {
        const scrollWidth = () => {
            const scrollArea = document.getElementById("scrollableArea");
            if (scrollArea != null) {
                console.error('scrollArea', scrollArea, scrollArea.offsetWidth);
            }
        };
        scrollWidth();
        window.addEventListener('resize', scrollWidth)

    }


}