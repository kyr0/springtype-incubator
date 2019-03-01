import {WebComponent, WebComponentLifecycle} from "../../../../../../src/package/html";
import template from "./BannerImg.tpl";

export interface BannerImgProps {
    src: string;
    name: string;
    url: string;
    width: number;

}

@WebComponent({
    tag: 'sb-banner-img',
    template
})
export class BannerImg extends HTMLElement implements WebComponentLifecycle {



    constructor(public props: BannerImgProps) {
        super();
    }

    init = () => {
    };

    mountChildren = () => {
        const divArea = this.getElementsByClassName("banner")[0];
        if (divArea != null) {
            this.props.width = divArea.scrollWidth;
          //  console.error('banner image', this.props.width);
        }
    }


}