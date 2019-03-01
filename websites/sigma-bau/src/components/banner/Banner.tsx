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
            const scrollArea = document.getElementById("scrollableArea");
            if (scrollArea != null) {
                this.props.width = scrollArea.offsetWidth;
                //console.error('bannerWidth', this.props.width);
            }
        };
        scrollWidth();
        window.addEventListener('resize', scrollWidth)

    }


}