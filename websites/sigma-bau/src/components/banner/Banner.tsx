import {WebComponent, WebComponentLifecycle} from "../../../../../src/package/html";
import template from "./Banner.tpl";

export interface BannerProps {
    banner: {
        src: string;
        name: string;
        url: string;
    }[],
    width?: number;
}


@WebComponent({
    tag: 'sb-banner',
    template
})
export class Banner extends HTMLElement implements WebComponentLifecycle {
    constructor(public props: BannerProps) {
        super();
    }

    init = () => {

    };

    mountChildren = () => {
        const scrollWidth = () => {
            this.props.width = this.offsetWidth;
        };
        window.addEventListener('resize', scrollWidth);
        //initial width
        scrollWidth();

    }


}